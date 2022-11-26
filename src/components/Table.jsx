export const Table = ({ columns, rows, length, image, execute }) => {
  const styles = {
    orderTable: {
      width: "100%",
      background: "white",
      margin: "30px auto",
      padding: "20px",
      border: "1px solid #DADEDF",
      display: "grid",
      gridTemplateColumns: `repeat(${length}, 1fr)`,
      borderRadius: "8px",
    },
    orderColumns: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "bold",
      fontSize: "1em",
    },
    orderFilas: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      fontSize: "1em",
      marginTop: "20px",
      marginBottom: "20px",
      borderBottom: "1px solid #DADEDF",
    },
    image: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "20px",
      marginBottom: "20px",
      objectFit: "cover",
      borderRadius: "5px",
    },
  };

  return (
    <div style={styles.orderTable}>
      {columns.map((column) => (
        <div style={styles.orderColumns}>{column.displayName}</div>
      ))}

      {rows &&
        rows.map((row) => (
          <>
            {columns.map((column, index) => {
              if (column.name === "Image") {
                return (
                  <img style={styles.image} src={row.Image} alt={row.Name} />
                );
              } else if (column.name === "Button") {
                return (
                  <button
                    style={{
                      width: "35px",
                      height: "35px",
                      margin: "auto",
                    }}
                    onClick={() => execute(row.id)}
                  >
                    <img src={image} alt="icon" />
                  </button>
                );
              } else {
                return <div style={styles.orderFilas}>{row[column.name]}</div>;
              }
            })}
          </>
        ))}
    </div>
  );
};
