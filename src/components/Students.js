
import React, { Component } from 'react';

import { List } from 'office-ui-fabric-react/lib/List';
import { Label } from 'office-ui-fabric-react/lib/Label'
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { TextField } from 'office-ui-fabric-react/lib/TextField'
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import { PrimaryButton, Button } from 'office-ui-fabric-react';

export class Students extends Component {
    constructor() {
        super()

        this._getErrorMessage = this._getErrorMessage.bind(this);
    }

    render() {
        return <div style={{
            background: '#eee',
            margin: '0px',
            overflow: 'auto',
        }}>
            
            <div style={{ padding: '0px' }}>
            
            <Button>Add</Button>
                <Button>Clear</Button>
                <PrimaryButton>Download</PrimaryButton>
                <List items={this.props.items} onRenderCell={this.renderCheckboxCell} />
            </div>
        </div>
    }

    renderCheckboxCell(item, index) {
        return (
            <div style={{ padding: '10px' , background: index%2 === 0 ? '#ddd' : '#eee' }} >
                <Checkbox label={item.name}/>
            </div>
        );
    }

    _getErrorMessage(value) {
        if (isNaN(value)) {
            return 'This value must be an integer'
        }
        if (!Number.isInteger(parseFloat(value))) {
            return 'This value must be an integer'
        }
        if (value < 100 || value > 10000) {
            return 'Value is limited between 100 and 10000'
        }
        return ''
    }
}