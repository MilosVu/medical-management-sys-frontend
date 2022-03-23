import { useState } from 'react';
import AddDoctorComponent from './AddDoctorComponent';
import { Modal, Button } from 'react-bootstrap';

const ListDoctorsComponent = () => {

    const [show,setShow]=useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () =>setShow(false);

    
        return (
        <>
            <div>
                <h2 className='test-center'>Doctors list</h2>

                <Button onClick={handleShow} className='btn btn-success' data-toggle="modal">Add doctor</Button>


                <div className='row'>

                </div>
                <div className="row">
                    <table className='table table-striped table-bordered'>

                        <thead>
                            <tr>

                                <th>First name</th>
                                <th>Last name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Fees</th>
                                <th>Specialization</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                
                            }
                        </tbody>

                    </table>
                    

                </div>

            </div>

            <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Add Doctor
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <AddDoctorComponent />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close Button
                            </Button>
                        </Modal.Footer>
                    </Modal>

            </>
        )
    }


export default ListDoctorsComponent;