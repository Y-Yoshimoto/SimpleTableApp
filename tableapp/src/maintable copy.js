import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const columns = [
    { dataField: "id", text: "ID", sort: true, editable: false },
    { dataField: "name", text: "Name", sort: true, editable: false },
    { dataField: "type", text: "Type", sort: true, editable: false },
]

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
            <BootstrapTable
                data={this.state.APIReqsdata}             // データ
                columns={columns}       // カラム定義
                keyField="id"           // キー
                bootstrap4={true}       // Bootstrap4を指定。デフォルトではBootstrap3
                bordered={true}         // 表のボーダー
            />
        );
    }
}
