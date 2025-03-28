const btn_print = document.querySelector('#print-btn')
const divTable  = document.querySelector('#table')

btn_print.addEventListener('click', () => {
    
    const content = divTable.innerHTML

    let style = "<style>"
        style+= "table {width:100%;font: 25px Calibri;}"
        style+= "table, th, td {border: solid 2px black;"
        style+= "padding:4px 8px; text-align:center;}"
    style+= "</style>"

    const win = window.open('', '', 'height:700, width:700')

    win.document.writeln('<html><head>')
    win.document.writeln('<title> Impressao </title>')
    win.document.writeln(style)
    win.document.writeln('</head> <body>')
    win.document.writeln(content)
    win.document.writeln('</body></html>')

    win.print()

})