# customElements

customElements allow you to add custom elements to your dashboard  
  
Example:

inside the docLayout in the server service option

```text
    dashboardConfig: {
      sideBarIconName: 'SettingsInputComponent',
      docLayout: [
        ['title',
          'description'],
        {
          type: 'custom',
          customFieldType: 'customElements',
          customElementName: 'MyComponentName'.
          customElementProps: {key: 'value'},
          itemKey: 'keyInDoc',
        },
        'status'
      ],
```

```text
import { DashboardApp } from 'src/localnode/feathers-mongoose-casl-dashboard';
import customRenderField from './customRenderField';
import 'src/localnode/redux-admin/style.css';
import MyComponent from './MyComponent'
...
return (
<DashboardApp
    url={screenName}
    customElements={{MyComponentName: MyComponent}}
/>
```

```text
// MyComponent.js
// --------------------------------
/* eslint-disable react/prop-types */
import React from 'react';

const MyComponent = ({
  field,
  fieldKey,
  fieldLabel,
  lang,
  rtl,
  form,
}) => {
  const { fieldProps } = field; // Data from server from docLayout
  const { values, setFieldValue, setValues } = form;
  // form is formik form, read this https://jaredpalmer.com/formik/docs/api/formik#setfieldvalue-field-string-value-any-shouldvalidate-boolean-void
  if (fieldProps && fieldProps.name === 'someUsefulData') {
    return (
      <div>
        name: {fieldProps.name}
        {JSON.stringify(values || {})};
        <button onClick={() => setFieldValue('title', 'newTitle')}>Update Title</button>
        <button onClick={() => setValues({ fields: { title: 'newTitle', description: '54545' } })}> Update Title and description</button>
      </div>
    );
  }
};

export default MyComponent
```
