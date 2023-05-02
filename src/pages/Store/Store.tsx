import { Row, Col } from "react-bootstrap"
import items from "../../data/items.json"
import { StoreItem } from "../../components/StoreItem"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import { useSearchParams } from "react-router-dom";

export function Store() {

    const [searchParams, setSearchParams] = useSearchParams();
      const productName = searchParams.get("name") ?? "";

    const visibleProducts = items.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

    const updateQueryString = (name: string) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };
    
    return (
        <>
           <InputGroup className="mb-3">
                <Form.Control
                    value={productName}
                    type="text"
                   onChange={(e) => updateQueryString(e.target.value)} 
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        {/* <Button variant="outline-secondary" id="button-addon2">
          Button
        </Button> */}
      </InputGroup>
            <Row md={2} xs={1} lg={3} className="g-3">
                {visibleProducts.map(item => (
                    <Col key={item.id}>
                        <StoreItem {...item} />
                    </Col>
                ))}
               
        </Row>
        </>
    )
}