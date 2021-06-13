import React from 'react';
import renderer from 'react-test-renderer';
import EditCard from './EditCard';
import {fireEvent, render} from "@testing-library/react";


test('Test properties setting', () => {
    const component = renderer.create(
        <EditCard term="term" definition="definition"/>,
    );

    expect(component.root.props.term).toBe("term")
    expect(component.root.props.definition).toBe("definition")
});


test('Test properties changing on element change', () => {
    const dom = render(
        <EditCard editable={true} term="term" definition="definition"
                  onItemChange={() => {}}/>,
    );

    const termInput = dom.getByPlaceholderText('Term');
    fireEvent.change(termInput, { "target": {value: '111'}});
    expect(termInput.value).toBe('111')
    const defInput = dom.getByPlaceholderText('Definition');
    fireEvent.change(defInput, { "target": {value: '222'}});
    expect(defInput.value).toBe('222')

});
test('Test removal button present when editable', () => {
    const dom = render(
        <EditCard editable={true} term="term" definition="definition"
                  onItemChange={() => {}}/>,
    );

    const removeButton = dom.getByTestId("delete-button");
});
test('Test no removal button when not editable', () => {
    const dom = render(
        <EditCard editable={false} term="term" definition="definition"
                  onItemChange={() => {}}/>,
    );

    const removeButton = dom.queryAllByTestId("delete-button");
    expect(removeButton).toStrictEqual([])
});