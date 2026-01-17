const db = require('./db');
const fs = require('fs');

async function inspectSchema() {
    try {
        const tableNames = ['users', 'services', 'appointments'];
        const schema = {};

        for (const table of tableNames) {
            try {
                const [columns] = await db.query(`DESCRIBE ${table}`);
                schema[table] = columns.map(col => ({
                    Field: col.Field,
                    Type: col.Type,
                    Null: col.Null,
                    Key: col.Key,
                    Default: col.Default,
                    Extra: col.Extra
                }));
            } catch (err) {
                console.error(`Error describing table ${table}:`, err.message);
                schema[table] = { error: err.message };
            }
        }

        fs.writeFileSync('schema.json', JSON.stringify(schema, null, 2));
        console.log('Schema written to schema.json');
        process.exit(0);
    } catch (error) {
        console.error('Error inspecting schema:', error);
        process.exit(1);
    }
}

inspectSchema();
