import React from "react";

const ConfirmModal = ({ taskName, onCancel, onConfirm }) => (
  <div className="modal-backdrop">
    <div className="modal">
      <div className="modal-header">
        <span>Xác nhận</span>
        <button className="modal-close" onClick={onCancel}>×</button>
      </div>
      <div className="modal-body">
        <span style={{ color: "red", marginRight: 6 }}>⚠️</span>
        <span>
          Bạn có xác nhận xóa công việc: <b>&lt;{taskName}&gt;</b> không?
        </span>
      </div>
      <div className="modal-footer">
        <button className="modal-btn" onClick={onCancel}>Hủy</button>
        <button
          className="modal-btn modal-btn-primary"
          onClick={onConfirm}
        >Đồng ý</button>
      </div>
    </div>
  </div>
);

export default ConfirmModal;