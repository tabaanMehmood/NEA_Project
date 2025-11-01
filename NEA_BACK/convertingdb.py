import pandas as pd
import sqlite3

csv_file = "/Users/tabaanmehmood/Documents/NEA_Project/NEA_BACK/data.csv"
df = pd.read_csv(csv_file)

conn = sqlite3.connect("my_database.db")  

table_name = "my_table"
df.to_sql(table_name, conn, if_exists="replace", index=False)

conn.close()
