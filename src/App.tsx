import { AttendeeList } from "./components/attendee-list";
import { Header } from "./components/header";

export function App() {
  return (
    <div className="max-w-screen-[1216px] mx-auto py-5 flex-col gap-5">
      <Header />
      <AttendeeList />
    </div>
  );
}
