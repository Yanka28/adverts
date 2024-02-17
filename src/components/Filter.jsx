import React from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../redux/selectors';
import { setCarsFilter } from '../redux/filterSlice';
import { BrandsStyle, PriceStyle, FilterStyle, MileageStyle, InputsStyle, Input, Button, Text } from './Filter.style.jsx'

const cars = [
{value:"Buick", label:"Buick"},
{ value: "Volvo", label: "Volvo" },
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
// const cars = [
//   "Buick",
//   "Volvo",
//   "HUMMER",
//   "Subaru",
//   "Mitsubishi",
//   "Nissan",
//   "Lincoln",
//   "GMC",
//   "Hyundai",
//   "MINI",
//   "Bentley",
//   "Mercedes-Benz",
//   "Aston Martin",
//   "Pontiac",
//   "Lamborghini",
//   "Audi",
//   "BMW",
//   "Chevrolet",
//   "Mercedes-Benz",
//   "Chrysler",
//   "Kia",
//   "Land"
// ]
const price = [
    { value: "30", label: " 30" },
    { value: "40", label: " 40" },
    { value: "50", label: " 50" },
    { value: "60", label: " 60" },
    { value: "70", label: " 70" },
    { value: "80", label: " 80" },
    { value: "90", label: " 90" },
    { value: "100", label: " 100" },
]
const Filter = () => { 
const filter = useSelector(selectFilter);
    const dispatch = useDispatch();
    console.log(filter);

  const  handleSelectChange = (selected) => {
    dispatch(setCarsFilter(selected));
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
        // Використовуйте зібрані дані, наприклад, відправте на сервер
        // console.log('Name:', name);
        // console.log('Email:', email);
        // console.log('Selected option:', selectedOption);
    };
    return (
        <FilterStyle>
            <form  onSubmit={handleSubmit} style={{display: 'flex',
gap: '18px',} }>
        <BrandsStyle>
            <Text>Car brand</Text>
              <Select value={filter} onChange={handleSelectChange} options={cars}  styles={customStyles} type="text" placeholder="Enter the text"  />
        </BrandsStyle>
        <PriceStyle>
            <Text>Price/1hour</Text>
                    <Select options={price} styles={customStyles} type="text" placeholder="To $" />
        </PriceStyle>
        <MileageStyle>
                    <Text>Car mileage / km</Text>
                <InputsStyle>
                <Input type="text" placeholder="    From" />
                <Input type="text" placeholder="    To" />
                </InputsStyle>
                </MileageStyle>
        <Button type="submit">Search</Button>
        </form>
        
            </FilterStyle>
    );
}
export default Filter;