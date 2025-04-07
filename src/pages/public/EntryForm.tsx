import {
  Button,
  Typography,
  Box,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { useReducer, useState } from "react";

interface EntryObject {
  categoryName: string;
  categoryCode: string;
  subcategoryName: string;
  subcategoryCode: string;
  numberOdEntries: number;
  isDonated: boolean;
}
interface StateObject {
  entriesTotal: number;
  entries: EntryObject[];
  email: string | undefined;
  number: string | undefined;
  age: number | undefined;
}
export const EntryForm: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>();

  //initial state
  const initialState: StateObject = {
    entriesTotal: 0,
    entries: [],
    email: undefined,
    number: undefined,
    age: undefined,
  };
  //function reducer
  const reducer = (
    state: { entries: any[] },
    action: { type: any; username: any; isSearching: any }
  ) => {
    switch (action.type) {
      case "clear":
        return { ...state, entries: [], entriesTotal: 0 };
      case "sort":
        return {
          ...state,
          entries: state.entries.sort(
            (a: { categoryName: string }, b: { categoryName: string }) =>
              a.categoryName > b.categoryName ? -1 : 1
          ),
        };
      case "username":
        return { ...state, username: action.username };
      case "searching":
        return {
          ...state,
          isSearching: action.isSearching,
        };
      default:
        throw new Error();
    }
  };
  //useReducer state
  const [state, dispatch] = useReducer(reducer, initialState);

  const categories = [
    "Knitting",
    "Crochet",
    "Machine sewing",
    "Horticulture",
    "Art",
    "Poetry",
  ];
  return (
    <Box>
      <h1>Entry form</h1>
      <p>Choose the categories you want to enter.</p>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <InputLabel id="category-select-label">Categories</InputLabel>
        <Select
          // displayEmpty
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          label="Categories"
        >
          <MenuItem disabled value="">
            <em>Categories</em>
          </MenuItem>
          {categories.map((name: any) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
