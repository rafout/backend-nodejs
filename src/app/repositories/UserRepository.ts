import connection from "../database/connection";

class UserRepository {
    public async create(user: any) {
        const SQL = "INSERT INTO users SET ?;";
        return new Promise((resolve, reject) => {
            connection.query(SQL, user, (error, result) => {
                if(error) return reject(error);
                return resolve(JSON.parse(JSON.stringify({success: "Usuário criado com sucesso!", id: result.insertId})));
            });
        });
    }

    public async findAll() {
        const SQL = 'SELECT id, username, name, DATE_FORMAT(birthdate, "%d/%m/%Y") as birthdate FROM users;';
        return new Promise((resolve, reject) => {
            connection.query(SQL, (error, result) => {
                if(error) return reject(error); 
                return resolve(JSON.parse(JSON.stringify(result)));
            });
        });
    }

    public async findById(id: number) {
        const SQL = `SELECT id, username, name, DATE_FORMAT(birthdate, "%d/%m/%Y") as birthdate FROM users WHERE id = ?;`;
        return new Promise((resolve, reject) => {
            connection.query(SQL, id, (error, result) => {
                if(error) return reject(error);
                return resolve(JSON.parse(JSON.stringify(result)));
            });
        });
    }

    public async update(id: number, user: any) {
        const SQL = "UPDATE users SET ? WHERE id = ?;";
        return new Promise((resolve, reject) => {
            connection.query(SQL, [user, id], (error, result) => {
                if(error) return reject(error);
                if(result.affectedRows === 0) return resolve(JSON.parse(JSON.stringify({error: "Usuário não encontrado!"})));
                return resolve(JSON.parse(JSON.stringify({success: "Usuário atualizado com sucesso!", id: id})));
            });
        });
    }

    public async delete(id: number) {
        const SQL = "DELETE FROM users WHERE id = ?;";
        return new Promise((resolve, reject) => {
            connection.query(SQL, id, (error, result) => {
                if(error) return reject(error);
                if(result.affectedRows === 0) return resolve(JSON.parse(JSON.stringify({error: "Usuário não encontrado!"})));
                return resolve(JSON.parse(JSON.stringify({success: "Usuário deletado com sucesso!", id: id})));
            });
        });
    }
}

export default new UserRepository();
