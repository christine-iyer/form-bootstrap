import React from 'react';
import './App.css';
import BasicExample from './components/BasicExample';
import FormDisabledInputExample from './components/FormDisabledInputExample';
import TextControlsExample from './components/TextControlExmple';
import InputSizesExample from './components/InputSizesExample';
import FormFileExample from './components/FormFileEzample';
import SelectSizesExample from './components/SelectSizesExample'
import ChecksRadios from './components/ChecksRadios';
import RangeExample from './components/RangeExample';
import InputGroupEx from './components/InputGroup';
import GridComplexExample from './components/GridComplexExample';
import data from './utilities/seed';
import columns from './utilities/columns';
import DataTable from 'react-data-table-component';
import { customSort, customStyles, conditionalRowStyles, resetPaginationToggle } from 'lodash'


function App() {
  const [selectedRows, setSelectedRows] = React.useState(false);
	const [toggledClearRows, setToggleClearRows] = React.useState(false);

	const handleChange = ({ selectedRows }) => {
		setSelectedRows(selectedRows);
	};
	const handleClearRows = () => {
		setToggleClearRows(!toggledClearRows);
	}
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
         WELCOME
        </h1>
       <BasicExample />
       <FormDisabledInputExample />
       <TextControlsExample />
       <InputSizesExample />
       <FormFileExample />
       <SelectSizesExample />
       <ChecksRadios />
       <RangeExample />
       <InputGroupEx />
       <GridComplexExample />
       <button className = 'Button'onClick={handleClearRows}>
				Clear Selected Rows
			</button>
			<DataTable
      className='datatable'
				columns={columns}
				data={data}
				pagination
				selectableRows={selectedRows}
				customStyles={customStyles}
				conditionalRowStyles={conditionalRowStyles}
				paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1

				theme="light"
				onSelectedRowsChange={handleChange}
				sortFunction={customSort}
				clearSelectedRows={toggledClearRows}

			/>
      </header>
    </div>
  );
}

export default App;
