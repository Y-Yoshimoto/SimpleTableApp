import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import { Button } from 'react-bootstrap';

const columns = [
    { dataField: "id", text: "ID", sort: true, editable: false },
    { dataField: "name", text: "Name", sort: true, editable: false },
    { dataField: "type", text: "Type", sort: true, editable: false },
]

// Export Button
const ExportCSVButtonC = (props) => {
    const handleClick = () => {
        props.onExport();
    };
    return (
        <Button variant="info" onClick={handleClick} size="lg">CSV出力</Button>
    );
};

export default class MainTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            APIReqsdata: []
        };
    }
    // 値取得
    componentDidMount(props) {
        const uri = "http://127.0.0.1:80/sampleData/data.json";
        console.log(uri)
        fetch(uri)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    APIReqsdata: result
                });
                console.log(result)
            })
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error
                });
                alert('Server Error.')
            })
    }
    render() {
        return (
            <ToolkitProvider
                data={this.state.APIReqsdata}  // データ
                columns={columns}       // カラム
                keyField="id"           // キー
                bootstrap4={true}       // Bootstrap4を指定
                bordered={true}         // 表のボーダー
                filter={filterFactory()}//フィルター
                exportCSV={{            // CSV出力
                    fileName: 'list.csv'
                }}
            >
                {
                    props => (
                        <React.Fragment>

                            <BootstrapTable {...props.baseProps} />
                            <hr />
                            <ExportCSVButtonC {...props.csvProps} />

                        </React.Fragment>
                    )
                }
            </ ToolkitProvider>
        );
    }
}
