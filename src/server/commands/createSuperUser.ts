import { createConnection } from "typeorm";
import * as options from "../ormconfigMySQL";
import { User } from "../users/entities/user.entity";
import { Role } from "../users/role.enum";

console.log(process.argv.slice(2));

const [email, password] = process.argv.slice(2);

const insertUser = async () => {
    const connection = await createConnection({ ...options, entities: [User] });

    const repository = connection.getRepository(User);

    const user = repository.create();
    user.email = email;
    user.passwordRaw = password;
    user.roles = [Role.Admin];

    await user.save();
    console.info("Super User has been created successfully!");
};

insertUser()
    .then()
    .catch(reason => console.error(reason))
    .finally(() => process.exit());
