import React from 'react';
import renderer from 'react-test-renderer';
import ActionCard from './ActionCard';
import {fireEvent, render} from "@testing-library/react";


const dummyAction = () => {
}

test('Test properties setting', () => {
    const component = renderer.create(
        <ActionCard title="title" action={dummyAction}/>,
    );

    expect(component.root.props.title).toBe("title")
    expect(component.root.props.action).toBe(dummyAction)
});


test('Test click event uses `action` property', () => {
    let x = false
    const dummyAction = () => {
        x = true
    }
    const dom = render(
        <ActionCard title="title" action={dummyAction}/>,
    );

    const card = document.getElementById('card');
    fireEvent.click(card);
    expect(x).toBeTruthy()
});