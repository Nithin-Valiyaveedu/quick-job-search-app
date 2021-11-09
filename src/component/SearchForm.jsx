import React from "react";
import { Form, Col, Row } from "react-bootstrap";

export default function SearchForm({ params, onParamChange }) {
  return (
    <Form className="mb-4">
      <Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>Search Job by title</Form.Label>
          <Form.Control
            onChange={onParamChange}
            value={params.title}
            name="title"
            type="text"
          />
        </Form.Group>

      </Row>
    </Form>
  );
}
