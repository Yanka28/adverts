import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = state => state.adverts;
export const selectLoading = state => state.adverts.isLoading;
export const selectError = state => state.adverts.error;
export const selectFilter = state => state.filter;

export const selectDesiredCar = createSelector(
    [selectAdverts, selectFilter],
    (adverts, filter) => {
        return (
            filter.brand === '' && filter.price === '' && filter.mileage.length === 0 ?
             adverts.list
            :adverts.list.filter(item => item.make === (filter.brand) || item.rentalPrice.includes(filter.price) || (item.mileage>=filter.mileage[0]&&item.mileage<=filter.mileage[1])))
       
     }
)
