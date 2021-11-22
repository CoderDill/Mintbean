import {InputLabel, MenuItem, FormHelperText, FormControl, Select} from '@mui/material'

export default function PictureSelect({book, setBook,  availableBooks}){
    const handleChange = (e) => {
        console.log(e.target.value)
        setBook(e.target.value)
    }

    return (
        <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="book-label">Book</InputLabel>
          <Select
            labelId="book-label"
            id="book"
            value={book}
            label="Book"
            onChange={handleChange}
          >
            {availableBooks.map(pic => <MenuItem key={pic} value={pic}>{pic}</MenuItem>)}
          </Select>
          <FormHelperText>Choose a Book</FormHelperText>
        </FormControl>
        
      </div> 
    )
}

