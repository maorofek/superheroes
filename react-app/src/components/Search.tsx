import * as React from 'react';
import 'react-app-polyfill/ie11';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { setSearchResults } from '../SearchSlice';
import { selectSearchResults } from '../Store';
import { addLastSearch } from '../SideBarSlice';


interface Values {
    Search: string;
}

async function doFetch(search: string) {
    const res = await fetch(`http://localhost:5000/superheroes/search/${search}`);
    const data = await res.json();
    return data;
}

const SearchAndDisplayResults = () => {
    const dispatch = useDispatch();
    const searchResults = useSelector(selectSearchResults);
    return (
        <div>
            <h1>Signup</h1>
            <Formik
                initialValues={{
                    Search: '',
                }}
                onSubmit={async (
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    const returnedSearchResults = await doFetch(values.Search);
                    dispatch(setSearchResults(returnedSearchResults));
                    dispatch(addLastSearch(values.Search));
                }}
            >
                <Form>
                    <label htmlFor="Search">Search</label>
                    <Field id="Search" name="Search" placeholder="Batman" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>FullName</th>
                            <th>Avatar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchResults.map((result, i) => (
                            <tr key={i}>
                                <td>{result["id"]}</td>
                                <td>{result["name"]}</td>
                                <td>{result["biography"]["full-name"]}</td>
                                <td><img src={result["image"]["url"]}></img></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};
export default SearchAndDisplayResults;
