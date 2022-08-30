import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import _ from "lodash"
import Data from "../data.json"
import { green, grey, red, yellow } from '@mui/material/colors';

const Navbar = ({ setSelectedLevel }) => {
    return (
        <div style={{ padding: "10px" }}>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Filter by Colour</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="" control={<Radio onChange={(e) => { setSelectedLevel("") }} />} label="All Level" />{
                        _.uniqBy(Data, "level").sort((a, b) => a.level - b.level).map((item) =>
                            <FormControlLabel value={item.level} control={<Radio onChange={(e) => {
                                setSelectedLevel(e.target.value)
                            }}
                                sx={{
                                    color: grey[800],
                                    '&.Mui-checked': {
                                        color: grey[600],
                                    },
                                }} />} label={"level " + item.level} sx={{ backgroundColor: item.level == 0 ? green[500] : item.level == 1 ? yellow[500] : red[500], padding: "0px 10px ", paddingRight: "15px", borderRadius: "20px" }} />)}
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default Navbar;