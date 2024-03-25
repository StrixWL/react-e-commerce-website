import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const SizingChartTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Size</TableCell>
            <TableCell>Length (cm)</TableCell>
            <TableCell>Chest (cm)</TableCell>
            <TableCell>Shoulder (cm)</TableCell>
            <TableCell>Sleeve (cm)</TableCell>
            <TableCell>Weight (kg)</TableCell>
            <TableCell>Height (cm)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>S</TableCell>
            <TableCell>70</TableCell>
            <TableCell>60</TableCell>
            <TableCell>58</TableCell>
            <TableCell>56</TableCell>
            <TableCell>45-55</TableCell>
            <TableCell>160-170</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>M</TableCell>
            <TableCell>72</TableCell>
            <TableCell>62</TableCell>
            <TableCell>60</TableCell>
            <TableCell>57</TableCell>
            <TableCell>55-65</TableCell>
            <TableCell>165-175</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>L</TableCell>
            <TableCell>74</TableCell>
            <TableCell>64</TableCell>
            <TableCell>62</TableCell>
            <TableCell>58</TableCell>
            <TableCell>65-75</TableCell>
            <TableCell>170-180</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>XL</TableCell>
            <TableCell>76</TableCell>
            <TableCell>66</TableCell>
            <TableCell>64</TableCell>
            <TableCell>59</TableCell>
            <TableCell>75-85</TableCell>
            <TableCell>180-190</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>XXL</TableCell>
            <TableCell>78</TableCell>
            <TableCell>68</TableCell>
            <TableCell>66</TableCell>
            <TableCell>60</TableCell>
            <TableCell>85-99</TableCell>
            <TableCell>185-199</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SizingChartTable;
