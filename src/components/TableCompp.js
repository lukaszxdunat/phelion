import React from 'react'
import {useTable} from 'react-table';
import {useMemo} from 'react'
import { COLUMNS } from './ColumnsComp';
import DATA from '/Users/lukas/Desktop/phelion/src/data.json'
import { Container, Table, Row, Col } from 'react-bootstrap';

export const TableCompp = () => {
    
    const columns = useMemo(()=> COLUMNS, [])
    const data = useMemo(()=> DATA, [])

    
    const tableInstance =  useTable({
        columns: COLUMNS,
        data: DATA,
    })

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Table striped bordered hover {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup) =>(
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column)=>(
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                                ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {
                                rows.map(row => {
                                    prepareRow(row)
                                    return(
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map((cell)=> {
                                                return <td{...cell.getCellProps()}>{cell.render('Cell')}
                                                </td>
                                            })}
                                        </tr>
                                    )
                                })
                            }
                            <td></td>
                        </tbody>
                    </Table>
            </Col>
        </Row>
    </Container>
    )
}
export default TableCompp;