import * as React from 'react';
import 'react-app-polyfill/ie11';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { setSearchResults } from '../SearchSlice';
import { selectSearchResults } from '../Store';
import { addLastSearch } from '../SideBarSlice';
import HoverableImage from './HoverableImage';

interface Values {
    Search: string;
}

async function doFetch(search: string) {
    const res = await fetch(`http://localhost:5000/superheroes/search/${search}`);
    const data = await res.json();
    if (data.response === 'error') {
        return [];
    }
    return data;
}

function validateSearch(value: string) {
    let error;
    value = value.trim();
    if (!value) {
        error = 'Required';
    } else if (!/^\w+$/i.test(value)) {
        error = 'Invalid input';
    }
    return error;
}


const SearchAndDisplayResults = () => {
    const dispatch = useDispatch();
    const searchResults = useSelector(selectSearchResults);
    return (
        <div>
            <Formik
                initialValues={{
                    Search: '',
                }}
                onSubmit={async (
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    const returnedSearchResults = await doFetch(values.Search);
                    console.log("shtok", returnedSearchResults);
                    dispatch(setSearchResults(returnedSearchResults));
                    dispatch(addLastSearch(values.Search));
                }}
            >
                <Form>
                    <span className="label label-primary">Search</span>
                    <Field id="Search" name="Search" validate={validateSearch} />
                    <button type="submit" className="btn btn-outline-dark">Submit</button>
                </Form>
            </Formik>
            <div style={{ marginTop: "40px" }}>
                {searchResults.length === 0 ? "no results" : <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">FullName</th>
                            <th scope="col">Avatar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchResults.map((result, i) => (
                            <tr style={{ height: "320px", maxHeight: "320px" }} key={i}>
                                <th scope="row">{result["id"]}</th>
                                <td>{result["name"]}</td>
                                <td>{result["biography"]["full-name"]}</td>
                                <td><HoverableImage imageUrl={result["image"]["url"]} heroId={result["id"]} /></td>
                                {/* <td>HoverableImage(result["image"]["url"], result["id"])</td> */}
                                {/* <td><img style={{ width: "220px", height: "auto" }} src={result["image"]["url"]} /></td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>}
            </div>
        </div >
    );
};
export default SearchAndDisplayResults;
