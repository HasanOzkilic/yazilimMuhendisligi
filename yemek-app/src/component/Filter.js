import React from 'react'
import "./style/Filter.css"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import { makeStyles } from '@material-ui/core/styles';

import Slider from '@material-ui/core/Slider';
const useStyles = makeStyles({
    root: {
      width: 300,
    },
  });
  
  function valuetext(value) {
    return `${value}°C`;
  }

function Filter() {
    const classes = useStyles();
    const [value, setValue] = React.useState('puan');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return (
        <div className="filter">
        <div className="filterContainer">
        <div className="filterShort">
        <div className="filterName">
        <span>
        Sıralama
        </span>
        
        </div>
        <div className="shortType">
        <FormControl component="fieldset">
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="puan" control={<Radio />} label="Puana Göre" />
        <FormControlLabel value="tes" control={<Radio />} label="Teslimat Süresine Göre" />
        
      </RadioGroup>
    </FormControl>
    

        
        </div>
        
        
        </div>

        <div className="filterMinCart">
        <div className="filterName">
        <span>
        Minimum Sepet Tutarı
        </span>
        <div className="rangebar">
        <div className="min">
        <label>
        5₺
        </label>
        
        </div>
        <div className="slider">
        
      <Slider
      defaultValue={15}
      getAriaValueText={valuetext}
      aria-labelledby="discrete-slider"
      valueLabelDisplay="auto"
      step={5}
     
      min={5}
      max={70}
    />

        </div>
        <div className="max">
        70₺
        
        </div>

      
        
        
        </div>
        
        </div>
        <div className="minCart">
        
    

        
        </div>
        
        
        </div>
        
        </div>
            
        </div>
    )
}

export default Filter
