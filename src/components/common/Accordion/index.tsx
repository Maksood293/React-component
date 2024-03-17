import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import './styles.scss'
import {Heading } from "..";
import { BEMHelper } from "../../../utils/bem-helper";
import { AccordionProps } from "../Interfaces/dtos";
const classHelper = BEMHelper('custom-accordition')



export const CustomAccordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <Accordion>
      {items.map((item, index) => (
        <Accordion.Item eventKey={`${index}`}>
        <Accordion.Header><div className={classHelper('')}><div><Heading fontWeight="semibold" type="h2">{item.title}</Heading></div><div className={classHelper('secondTitle')}>{item?.secondTitle && item?.secondTitle}</div></div></Accordion.Header>
        <Accordion.Body>
         {item.content}
        </Accordion.Body>
      </Accordion.Item>
      ))}
    </Accordion>
  );
};

