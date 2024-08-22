import { Col, Row } from "react-bootstrap"
export interface Props<T> {
    records : T[]
    renderItem : (record : T) => React.ReactNode
}
export type HasID ={
    id? : number
}

const GridList =<T extends HasID >({records, renderItem}: Props<T>) => {

    const renderList =
    records.length > 0 ? 
    records.map((record) => {
        return (
            <Col  key={record.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
                {renderItem(record)}
            </Col>
        )
    })  : <p>there are no List</p>

  return (
    <Row> 
        {renderList}
    </Row>
  )
}

export default GridList
