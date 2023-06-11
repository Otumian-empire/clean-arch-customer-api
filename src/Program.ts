import "reflect-metadata";
import { dirname, join } from "path";

class Program {
    public Run() {
        console.log("Running Programme");
        console.log(join(dirname(__dirname), "/src/Database"));
    }
}

const program = new Program();
program.Run();
