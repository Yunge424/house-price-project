
Papa.parse('uk_house_prices_6_areas_2026.csv', {
  download: true,
  header: true,
  skipEmptyLines: true,

  complete: function(results) {

    console.log("CSV loaded successfully");
    console.log(results.data);

    const tbody = document.querySelector('#dataTable tbody');

    results.data.forEach(row => {

      const tr = document.createElement('tr');

      const columns = [
        'Region',
        'AveragePriceGBP',
        'MedianPriceGBP',
        'Transactions'
      ];

      columns.forEach(column => {
        const td = document.createElement('td');
        td.textContent = row[column] ?? '';
        tr.appendChild(td);
      });

      tbody.appendChild(tr);

    });
  },

  error: function(err) {
    console.error("Failed to load CSV:", err);
  }
});
