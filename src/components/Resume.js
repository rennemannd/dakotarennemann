import React from 'react';
import { ReactPDF } from 'react-pdf';
import PDF from '../docs/Resume.pdf';

class Resume extends React.Component {

    state = {
        numPages: null,
        pageNumber: 1
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div>
            </div>
        )
    }
}

export default Resume;