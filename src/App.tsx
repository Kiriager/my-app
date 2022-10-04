import { TableArchiveStatusButton } from "./features/notes/components/buttons/TableArchiveStatusButton";
import { NotesTable } from "./features/notes/components/tables/NotesTable";
import { StatsTable } from "./features/notes/components/tables/StatsTable";


function App() {
  return (
    <div className="App m-[5%]">
      <NotesTable />
      <StatsTable />
      <TableArchiveStatusButton />
    </div>
  );
}

export default App;