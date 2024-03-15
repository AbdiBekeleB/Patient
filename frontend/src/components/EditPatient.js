import React from "react";

export default function EditPatient({
  handleEditSubmit,
  selectedEditData,
  handleCancelBtn,
}) {
  return (
    <>
      <h3 className="mb-4 mt-3">EDIT FORM:</h3>
      <form
        onSubmit={(e) => handleEditSubmit(e, selectedEditData.patient_id)}
        className="needs-validation"
        novalidate
      >
        <div className="form-group row">
          <label htmlFor="first_name" className="col-sm-2 col-form-label">
            First Name:
          </label>
          <div className="col-sm-5 mb-2">
            <input
              type="text"
              name="first_name"
              className="form-control border-2"
              defaultValue={selectedEditData.first_name}
              required
            />
            <div className="invalid-feedback">Please provide a first name.</div>
          </div>
        </div>
        <div className="form-group row mb-2">
          <label htmlFor="last_name" className="col-sm-2 col-form-label">
            Last Name:
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="last_name"
              className="form-control border-2"
              defaultValue={selectedEditData.last_name}
              required
            />
            <div className="invalid-feedback">Please provide a last name.</div>
          </div>
        </div>
        <div className="form-group row mb-2">
          <label htmlFor="blood" className="col-sm-2 col-form-label">
            Blood Group:
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="blood"
              className="form-control border-2"
              defaultValue={selectedEditData.blood}
              required
            />
            <div className="invalid-feedback">
              Please provide a blood group.
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-9 offset-sm-3">
            <button type="submit" className="btn btn-primary me-2">
              EDIT
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCancelBtn}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
