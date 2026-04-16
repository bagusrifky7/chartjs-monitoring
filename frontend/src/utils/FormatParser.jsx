import React, { useState } from 'react';

const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(number)
};

const formatPercent = (number) => {
    if (number === null) return "0%"
    return `${Number(number).toFixed(0)}%`
}

export { formatRupiah, formatPercent };