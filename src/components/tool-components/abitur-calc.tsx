import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { DataTableToolbar } from "./abitur-calc-toolbar";

{
  /* 
    Inspo: 
      https://www.abi-rechner.com/bundeslander/bayern/ 
      https://derabirechner.de/bundesland/Bayern/Gymnasium%2FGemeinschaftsschule
    Berechnungssysteme als .json
  */
}

export default function AbiturCalc() {
  return (
    <div className="space-y-4">
      <DataTableToolbar />
      <div className="border rounded-lg">
        <Table>
          <TableCaption>Abitur Grade Calculator</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-32">Fachart</TableHead>
              <TableHead className="w-64">Fach</TableHead>
              <TableHead>Q11/1</TableHead>
              <TableHead>Q11/2</TableHead>
              <TableHead>Q12/1</TableHead>
              <TableHead>Q12/2</TableHead>
              <TableHead>Abiturprüfung</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                Prüfungsfach{" "}
                <span className="text-muted-foreground text-xs">1</span>
              </TableCell>
              <TableCell>
                <Select value="test">
                  <SelectTrigger>
                    <SelectValue placeholder="Test" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="test">Test</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <Input type="number" placeholder="Punkte" />
              </TableCell>
              <TableCell>
                <Input type="number" placeholder="Punkte" />
              </TableCell>
              <TableCell>
                <Input type="number" placeholder="Punkte" />
              </TableCell>
              <TableCell>
                <Input type="number" placeholder="Punkte" />
              </TableCell>
              <TableCell>
                <Input type="number" placeholder="Punkte" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                Grundkurs{" "}
                <span className="text-muted-foreground text-xs">1</span>
              </TableCell>
              <TableCell>
                <Select value="test">
                  <SelectTrigger>
                    <SelectValue placeholder="Test" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="test">Test</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <Input type="number" placeholder="Punkte" />
              </TableCell>
              <TableCell>
                <Input type="number" placeholder="Punkte" />
              </TableCell>
              <TableCell>
                <Input type="number" placeholder="Punkte" />
              </TableCell>
              <TableCell>
                <Input type="number" placeholder="Punkte" />
              </TableCell>
              <TableCell />
            </TableRow>{" "}
            <TableRow>
              <TableCell className="font-medium">
                Zusatzkurs{" "}
                <span className="text-muted-foreground text-xs">1</span>
              </TableCell>
              <TableCell>
                <Select value="test">
                  <SelectTrigger>
                    <SelectValue placeholder="Test" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="test">Test</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <Input type="number" placeholder="Punkte" />
              </TableCell>
              <TableCell>
                <Input type="number" placeholder="Punkte" />
              </TableCell>
              <TableCell>
                <Input type="number" placeholder="Punkte" />
              </TableCell>
              <TableCell>
                <Input type="number" placeholder="Punkte" />
              </TableCell>
              <TableCell />
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
