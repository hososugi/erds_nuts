"use client";
import createEngine, { DefaultLinkModel, DefaultNodeModel, DefaultPortModel, DiagramModel } from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';

export default function Edit() {
    // create an instance of the engine with all the defaults
    const engine = createEngine();

    // node 1
    const nodeCustomer = new DefaultNodeModel({
        name: 'Customer',
        color: 'rgb(0,192,255)',
    });
    nodeCustomer.setPosition(100, 100);
    let portCustomerId = nodeCustomer.addOutPort('CustomerID');
    let portCustomerName = nodeCustomer.addOutPort('Name');

    // node 2
    const nodeOrder = new DefaultNodeModel({
        name: 'Order',
        color: 'rgb(0,192,255)',
    });
    nodeOrder.setPosition(100, 200);
    let portOrderId = nodeOrder.addOutPort('OrderID');
    let portOrderCustomerId = nodeOrder.addInPort('CustomerID');
    

    // link them and add a label to the link
    const link = portOrderCustomerId.link<DefaultLinkModel>(portCustomerId);
    //link.addLabel('Hello World!');

    const model = new DiagramModel();
    model.addAll(nodeCustomer, nodeOrder, link);
    engine.setModel(model);

    return (
        <CanvasWidget engine={engine} className="canvas-wrapper" />
    );
}
