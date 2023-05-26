import db from './SQLiteDatabase';

db.transaction(tx => {
    tx.executeSql(
        "CREATE TABLE IF NOT EXISTS aluno (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, media DECIMAL(10,5));"
    )
});

const create = (obj) => {
    return new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql("INSERT INTO aluno(nome, media) VALUES (?,?)", [obj.nome, obj.media],
                (_, {rowsAffected, insertId}) => {
                    if (rowsAffected > 0) {
                        resolve(insertId);
                    } else {
                        reject("Erro ao inserir obj: " +JSON.stringify(obj));
                    }
                },
                (_, error) => reject(error)
            )
        })
    })
}

export default {
    create
}