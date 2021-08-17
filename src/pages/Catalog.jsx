
import React from 'react';
import "./css/Catalog.css";
import { Tabs, Tab } from "react-bootstrap";

import { useState } from "react";

import Pictures from "../components/Catalog/ImgCatalog.jsx";
import Texts from "../components/Catalog/TextsCatalog.jsx";
import { useHistory } from 'react-router-dom';

/* Media catalog page */
export default function Catalog() {

    const history = useHistory();
    const nextPage = () => {
        history.push('/card-editor')
    }
    const [key, setKey] = useState("pictures");

    return (
        <div id="media-catalog">
            <div className="media-catalog-subcontainer">
                <h1>Media Catalog</h1>
                <p>Lorem ipsum dolor sit amet consectetur voluptatem aut nihil.</p>
                <Tabs id="tabs" activeKey={key} onSelect={(k) => setKey(k)}>
                    <Tab xs={10} eventKey="pictures" title="Pictures">
                        <Pictures nextPage={nextPage} />
                    </Tab>
                    <Tab eventKey="texts" title="Texts">
                        <Texts />
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}
