import React, { Component } from 'react';

import { List } from 'office-ui-fabric-react/lib/List';
import { Label } from 'office-ui-fabric-react/lib/Label'
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { TextField } from 'office-ui-fabric-react/lib/TextField'
import { ScrollablePane } from 'office-ui-fabric-react/lib/ScrollablePane';
import { Sticky, StickyPositionType } from 'office-ui-fabric-react/lib/Sticky';
import { PrimaryButton, Button } from 'office-ui-fabric-react/lib/Button';
import { Group } from "./Group";
import { ComboBoxList } from './ComboBoxList'
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';

export class EditStyle extends Component {
    constructor() {
        super()

        this._getErrorMessage = this._getErrorMessage.bind(this);
    }

    render() {
        return <div style={{ margin: '0px', height: '80vh', position: 'relative' }}>
            <div style={{ width: '40%', height: 'calc(100vh - 180px)' }}>
                <TextField placeholder="A name to reconize the style"
                    onGetErrorMessage={this._getErrorMessage}
                    label="Name"
                    required={true}></TextField>
                    <div style={{height: 'calc(100% - 100px)'}}>
                    <Editor value={{name: "hello"}} 
                    mode='node'
                    allowedModes= {['node', 'code']}
                    htmlElementProps={{style: {height: '100%'}}}/>
                    </div>
                
            </div>
            <div style={{ background: 'blue' }}>

            </div>
            <div>
                <PrimaryButton>Save</PrimaryButton>
                <Button>Cancel</Button>
            </div>
        </div>
    }

    _getErrorMessage(value) {
        if (value === 'wiskunde') {
            return 'This name already exists'
        }
        if (value.length === 0) {
            return 'This field is required'
        }
        if (value.length <= 3) {
            return 'The length must be greater than 3'
        }
        return ''
    }
}