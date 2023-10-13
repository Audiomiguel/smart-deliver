import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ParcelStatus } from 'src/pages/user/service/create-order.interface';
import { ParcelTranslated } from 'src/constants';

interface StatusSelectProps {
  currentStatus: ParcelStatus;
  onUpdateStatus: (newStatus: ParcelStatus) => void;
  loading: boolean;
}

export const SelectChangeStatus: React.FC<StatusSelectProps> = ({
  currentStatus,
  onUpdateStatus,
  loading,
}) => {
  const availableStatuses: Record<ParcelStatus, ParcelStatus[]> = {
    ORDERED: ['ORDERED', 'SHIPPED', 'REFUNDED'],
    SHIPPED: ['SHIPPED', 'CANCELLED', 'REFUNDED', 'DELIVERED'],
    DELIVERED: ['DELIVERED'],
    REFUNDED: ['REFUNDED'],
    CANCELLED: ['CANCELLED'],
  };

  const handleStatusChange = (
    event: React.ChangeEvent<{ value: ParcelStatus }>
  ) => {
    const newStatus = event.target.value as ParcelStatus;
    if (newStatus === currentStatus) return;
    onUpdateStatus(newStatus);
  };

  return (
    <Select
      value={currentStatus}
      onChange={handleStatusChange}
      disabled={loading}
    >
      {availableStatuses[currentStatus].map((status) => (
        <MenuItem key={status} value={status}>
          {ParcelTranslated?.[status]}
        </MenuItem>
      ))}
    </Select>
  );
};
