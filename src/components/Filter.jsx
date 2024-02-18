import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectDesiredCar } from '../redux/selectors';
import { setBrandFilter, setPriceFilter, setFromFilter, setToFilter } from '../redux/filterSlice';
import { setFilteredList} from '../redux/slice'
import { BrandsStyle, PriceStyle, FilterStyle, MileageStyle, InputsStyle, Input, Button, Text } from './Filter.style.jsx'

const cars = [
{value:"Buick", label:"Buick"},
{value: "Volvo", label: "Volvo" },
{value:"HUMMER", label:"HUMMER"},
{value:"Subaru", label:"Subaru"},
{value:"Mitsubishi", label:"Mitsubishi"},
{value:"Nissan", label:"Nissan"},
{value:"Lincoln", label:"Lincoln"},
{value: "GMC", label: "GMC"},
{value: "Hyundai", label: "Hyundai" },
{value:"MINI", label:"MINI"},
{value:"Bentley", label:"Bentley"},
{value: "Mercedes-Benz", label: "Mercedes-Benz" },
{value: "Aston Martin", label: "Aston Martin" },
{value: "Pontiac", label: "Pontiac"},
{value:"Lamborghini", label:"Lamborghini"},
{value: "Audi", label:   "Audi"},
{value: "BMW", label: "BMW"},
{value: "Chevrolet", label: "Chevrolet" },
{value: "Chrysler", label: "Chrysler"},
{value:  "Kia", label:  "Kia"},
{value:   "Land", label:   "Land"},
]

const price = [
    { value: "30", label: " 30" },
    { value: "40", label: " 40" },
    { value: "45", label: " 45" },
    { value: "50", label: " 50" },
    { value: "60", label: " 60" },
    { value: "70", label: " 70" },
    { value: "80", label: " 80" },
    { value: "90", label: " 90" },
    { value: "100", label: " 100" },
]
const Filter = () => { 

    const filter = useSelector(selectFilter);
    const filteredcars = useSelector(selectDesiredCar)
    const dispatch = useDispatch();

 
      const  handleSelectBrandChange = (selected) => {
    dispatch(setBrandFilter(selected));
    };
      const  handleSelectPriceChange = (selected) => {
    dispatch(setPriceFilter(selected));
    };
    
    const handleFromChange = (e) => {
        const value = parseFloat(e.target.value);
        if (!isNaN(value)){ dispatch(setFromFilter(value))}
     ;
  };

    const handleToChange = (e) => {
        const value = parseFloat(e.target.value);
        if (!isNaN(value)){ dispatch(setToFilter(value))}
   ;
  };

    const customStyles = {
    control: (baseStyles) => ({
        ...baseStyles,
            height: '48px',
            borderRadius: '14px',
        backgroundColor: 'rgb(236, 236, 241)',
    }),
    };

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(filter, 'filter ');
    dispatch(setFilteredList(filteredcars))
    };

    return (
        <FilterStyle>
            <form style={{display: 'flex', gap: '18px',} } onSubmit={handleSubmit}>
        <BrandsStyle>
            <Text>Car brand</Text>
              <Select value={filter.brand.value} onChange={handleSelectBrandChange} options={cars}  styles={customStyles} type="text" placeholder="Enter the text"  />
        </BrandsStyle>
        <PriceStyle>
            <Text>Price/1hour</Text>
                    <Select value={filter.price.value} onChange={handleSelectPriceChange} options={price} styles={customStyles} type="text" placeholder="To $" />
        </PriceStyle>
        <MileageStyle>
                    <Text>Car mileage / km</Text>
                <InputsStyle>
                   <Input value={ filter.mileage[0]}   onChange={handleFromChange} type="number" placeholder="    From" />
                   <Input value={ filter.mileage[1]} onChange={handleToChange} type="number" placeholder="    To" />
                </InputsStyle>
                </MileageStyle>
        <Button type="submit" >Search</Button>
        </form>
        
            </FilterStyle>
    );
}
export default Filter;