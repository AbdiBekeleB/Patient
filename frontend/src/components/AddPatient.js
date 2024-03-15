import React from "react";

export function AddPatient({ handleAddSubmit, handleCancelBtn }) {
  return (
    <>
      <h3 className="mb-4 mt-3">ADD FORM:</h3>
      <form onSubmit={handleAddSubmit}>
        <div className="form-group row mb-2">
          <label htmlFor="first_name" className="col-sm-2 col-form-label">
            First Name:
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="first_name"
              className="form-control border-2"
            />
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
            />
          </div>
        </div>
        <div className="form-group row mb-2">
          <label htmlFor="blood" className="col-sm-2 col-form-label">
            Blood Group:
          </label>
          <div className="col-sm-5">
            <input type="text" name="blood" className="form-control border-2" />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-9 offset-sm-3">
            <button type="submit" className="btn btn-primary me-2">
              ADD
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
