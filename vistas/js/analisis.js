document.addEventListener('DOMContentLoaded', function () {

// Datos de capacidades instaladas por fuente de energía
const fuentesEnergia = [
    { "Eolica": 1 },
    { "Hidroelectrica": 65 },
    { "Solar": 4 },
    { "Otras": 1.6 }
];

// Función para calcular la energía renovable total instalada
function calcularCapacidadRenovable() {
    return fuentesEnergia.reduce((total, fuente) => {
        return total + Object.values(fuente)[0];
    }, 0);
}

// Función para calcular el porcentaje de energía renovable en el consumo
function calcularPorcentajeRenovable(consumoTotal) {
    const capacidadRenovable = calcularCapacidadRenovable();
    
    // Cálculo del porcentaje de energía renovable en el consumo total
    const porcentajeRenovable = (capacidadRenovable / consumoTotal) * 100;
    
    return porcentajeRenovable.toFixed(2);
}

// Captura del formulario y evento de cálculo
document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const consumoTotal = parseFloat(document.getElementById('consumoTotal').value);
    
    if (!isNaN(consumoTotal) && consumoTotal > 0) {
        const porcentaje = calcularPorcentajeRenovable(consumoTotal);
        document.getElementById('mensajeResultado').innerText = `El porcentaje de energía renovable en el consumo eléctrico total es: ${porcentaje}%`;
    } else {
        document.getElementById('mensajeResultado').innerText = 'Por favor, ingresa un valor válido para el consumo total.';
    }
});


// Tabla consumo de energias renovables

$(document).ready(function() {
    $('#tabla-consumo').DataTable({
        data: [
                { "Pais": "Colombia", "Year": 1965, "Eolica": 0, "Hidroelectrica": 3.5439494, "Solar": 0, "Otras": 0 },
                { "Pais": "Colombia", "Year": 1966, "Eolica": 0, "Hidroelectrica": 3.9372194, "Solar": 0, "Otras": 0 },
                { "Pais": "Colombia", "Year": 1967, "Eolica": 0, "Hidroelectrica": 4.3892536, "Solar": 0, "Otras": 0 },
                { "Pais": "Colombia", "Year": 1968, "Eolica": 0, "Hidroelectrica": 4.8910117, "Solar": 0, "Otras": 0 },
                { "Pais": "Colombia", "Year": 1969, "Eolica": 0, "Hidroelectrica": 5.4379735, "Solar": 0, "Otras": 0 },
                { "Pais": "Colombia", "Year": 1970, "Eolica": 0, "Hidroelectrica": 6.05274, "Solar": 0, "Otras": 0 },
                { "Pais": "Colombia", "Year": 1971, "Eolica": 0, "Hidroelectrica": 6.4234085, "Solar": 0, "Otras": 0 },
                { "Pais": "Colombia", "Year": 1972, "Eolica": 0, "Hidroelectrica": 7.115021, "Solar": 0, "Otras": 0 },
                { "Pais": "Colombia", "Year": 1973, "Eolica": 0, "Hidroelectrica": 7.7433486, "Solar": 0, "Otras": 0 },
                { "Pais": "Colombia", "Year": 1974, "Eolica": 0, "Hidroelectrica": 8.7920685, "Solar": 0, "Otras": 0 },
                { "Pais": "Colombia", "Year": 1975, "Eolica": 0, "Hidroelectrica": 9.7323, "Solar": 0, "Otras": 0.189 },
                { "Pais": "Colombia", "Year": 1976, "Eolica": 0, "Hidroelectrica": 10.22642, "Solar": 0, "Otras": 0.202 },
                { "Pais": "Colombia", "Year": 1977, "Eolica": 0, "Hidroelectrica": 10.451812, "Solar": 0, "Otras": 0.192 },
                { "Pais": "Colombia", "Year": 1978, "Eolica": 0, "Hidroelectrica": 12.07144, "Solar": 0, "Otras": 0.206 },
                { "Pais": "Colombia", "Year": 1979, "Eolica": 0, "Hidroelectrica": 13.2593, "Solar": 0, "Otras": 0.216 },
                { "Pais": "Colombia", "Year": 1980, "Eolica": 0, "Hidroelectrica": 14.44702, "Solar": 0, "Otras": 0.227 },
                { "Pais": "Colombia", "Year": 1981, "Eolica": 0, "Hidroelectrica": 14.26534, "Solar": 0, "Otras": 0.212 },
                { "Pais": "Colombia", "Year": 1982, "Eolica": 0, "Hidroelectrica": 15.238536, "Solar": 0, "Otras": 0.231 },
                { "Pais": "Colombia", "Year": 1983, "Eolica": 0, "Hidroelectrica": 15.365776, "Solar": 0, "Otras": 0.234 },
                { "Pais": "Colombia", "Year": 1984, "Eolica": 0, "Hidroelectrica": 17.14022, "Solar": 0, "Otras": 0.255 },
                { "Pais": "Colombia", "Year": 1985, "Eolica": 0, "Hidroelectrica": 18.440771, "Solar": 0, "Otras": 0.267 },
                { "Pais": "Colombia", "Year": 1986, "Eolica": 0, "Hidroelectrica": 21.332952, "Solar": 0, "Otras": 0.266 },
                { "Pais": "Colombia", "Year": 1987, "Eolica": 0, "Hidroelectrica": 23.24756, "Solar": 0, "Otras": 0.268 },
                { "Pais": "Colombia", "Year": 1988, "Eolica": 0, "Hidroelectrica": 24.5194, "Solar": 0, "Otras": 0.274 },
                { "Pais": "Colombia", "Year": 1989, "Eolica": 0, "Hidroelectrica": 26.78212, "Solar": 0, "Otras": 0.274 },
                { "Pais": "Colombia", "Year": 1990, "Eolica": 0, "Hidroelectrica": 27.495852, "Solar": 0, "Otras": 0.274 },
                { "Pais": "Colombia", "Year": 1991, "Eolica": 0, "Hidroelectrica": 27.72608, "Solar": 0, "Otras": 0.269 },
                { "Pais": "Colombia", "Year": 1992, "Eolica": 0, "Hidroelectrica": 22.280584, "Solar": 0, "Otras": 0.34 },
                { "Pais": "Colombia", "Year": 1993, "Eolica": 0, "Hidroelectrica": 27.856392, "Solar": 0, "Otras": 0.389 },
                { "Pais": "Colombia", "Year": 1994, "Eolica": 0, "Hidroelectrica": 32.05839, "Solar": 0, "Otras": 0.444 },
                {"Pais": "Colombia", "Year": 1995, "Eolica": 0, "Hidroelectrica": 31.9894, "Solar": 0, "Otras": 0.477},
                {"Pais": "Colombia", "Year": 1996, "Eolica": 0, "Hidroelectrica": 35.287624, "Solar": 0, "Otras": 0.496},
                {"Pais": "Colombia", "Year": 1997, "Eolica": 0, "Hidroelectrica": 31.47576, "Solar": 0, "Otras": 0.483},
                {"Pais": "Colombia", "Year": 1998, "Eolica": 0, "Hidroelectrica": 30.781685, "Solar": 0, "Otras": 0.532},
                {"Pais": "Colombia", "Year": 1999, "Eolica": 0, "Hidroelectrica": 33.700657, "Solar": 0, "Otras": 0.457},
                {"Pais": "Colombia", "Year": 2000, "Eolica": 0, "Hidroelectrica": 30.815718, "Solar": 0.001835014, "Otras": 0.496},
                {"Pais": "Colombia", "Year": 2001, "Eolica": 0, "Hidroelectrica": 31.632658, "Solar": 0.00266875, "Otras": 0.496},
                {"Pais": "Colombia", "Year": 2002, "Eolica": 0, "Hidroelectrica": 33.968037, "Solar": 0.00465125, "Otras": 0.491},
                {"Pais": "Colombia", "Year": 2003, "Eolica": 0, "Hidroelectrica": 36.17636, "Solar": 0.006405, "Otras": 0.495},
                {"Pais": "Colombia", "Year": 2004, "Eolica": 0.05199, "Hidroelectrica": 38.33006, "Solar": 0.007951726, "Otras": 0.467},
                {"Pais": "Colombia", "Year": 2005, "Eolica": 0.04948, "Hidroelectrica": 39.220886, "Solar": 0.00953125, "Otras": 0.503},
                {"Pais": "Colombia", "Year": 2006, "Eolica": 0.06298139, "Hidroelectrica": 42.55789, "Solar": 0, "Otras": 0.5197261},
                {"Pais": "Colombia", "Year": 2007, "Eolica": 0.049890976, "Hidroelectrica": 44.24198, "Solar": 0, "Otras": 0.5071364},
                {"Pais": "Colombia", "Year": 2008, "Eolica": 0.053918168, "Hidroelectrica": 46.16088, "Solar": 0, "Otras": 0.50934935},
                {"Pais": "Colombia", "Year": 2009, "Eolica": 0.057707813, "Hidroelectrica": 40.837364, "Solar": 0, "Otras": 1.0032873},
                {"Pais": "Colombia", "Year": 2010, "Eolica": 0.03856992, "Hidroelectrica": 40.55746, "Solar": 0, "Otras": 1.1099824},
                {"Pais": "Colombia", "Year": 2011, "Eolica": 0.041271944, "Hidroelectrica": 48.42748, "Solar": 0, "Otras": 1.3783877},
                {"Pais": "Colombia", "Year": 2012, "Eolica": 0.05485471, "Hidroelectrica": 47.58171, "Solar": 0, "Otras": 1.4760586},
                {"Pais": "Colombia", "Year": 2013, "Eolica": 0.057624802, "Hidroelectrica": 44.36279, "Solar": 0, "Otras": 1.3464338},
                {"Pais": "Colombia", "Year": 2014, "Eolica": 0.0702303, "Hidroelectrica": 44.741962, "Solar": 0, "Otras": 1.728923},
                {"Pais": "Colombia", "Year": 2015, "Eolica": 0.06837745, "Hidroelectrica": 44.681904, "Solar": 0, "Otras": 1.8229002},
                {"Pais": "Colombia", "Year": 2016, "Eolica": 0.050887343, "Hidroelectrica": 46.787926, "Solar": 0, "Otras": 1.9938043},
                {"Pais": "Colombia", "Year": 2017, "Eolica": 0.003071419, "Hidroelectrica": 57.32773, "Solar": 0.005, "Otras": 1.9912593},
                {"Pais": "Colombia", "Year": 2018, "Eolica": 0.04344, "Hidroelectrica": 56.65124, "Solar": 0.012, "Otras": 2.1187904},
                {"Pais": "Colombia", "Year": 2019, "Eolica": 0.06332, "Hidroelectrica": 54.437, "Solar": 0.13206, "Otras": 2.4441278},
                {"Pais": "Colombia", "Year": 2020, "Eolica": 0.01012,"Hidroelectrica": 49.83735, "Solar": 0.1908, "Otras": 2.820657},
                {"Pais": "Colombia", "Year": 2021,"Eolica": 0.059852246,"Hidroelectrica": 59.858196, "Solar": 0.31732163, "Otras": 2.8208168}
                ],
        columns: [
            { data: 'Pais' },
            { data: 'Year' },
            { data: 'Eolica' },
            { data: 'Hidroelectrica' },
            { data: 'Solar' },
            { data: 'Otras' }
        ],
        responsive: true
    });
});

// Tabla produccion de energias renovables

$(document).ready(function() {
    $('#tabla-produccion').DataTable({
        data:
        [
            {"Pais": "Colombia", "Year": 1965, "Eolica": 0, "Hidroelectrica": 3.5439494, "Solar": 0, "Otras": 0},
            {"Pais": "Colombia", "Year": 1966, "Eolica": 0, "Hidroelectrica": 3.9372194, "Solar": 0, "Otras": 0},
            {"Pais": "Colombia", "Year": 1967, "Eolica": 0, "Hidroelectrica": 4.3892536, "Solar": 0, "Otras": 0},
            {"Pais": "Colombia", "Year": 1968, "Eolica": 0, "Hidroelectrica": 4.8910117, "Solar": 0, "Otras": 0},
            {"Pais": "Colombia", "Year": 1969, "Eolica": 0, "Hidroelectrica": 5.4379735, "Solar": 0, "Otras": 0},
            {"Pais": "Colombia", "Year": 1970, "Eolica": 0, "Hidroelectrica": 6.05274, "Solar": 0, "Otras": 0},
            {"Pais": "Colombia", "Year": 1971, "Eolica": 0, "Hidroelectrica": 6.4234085, "Solar": 0, "Otras": 0},
            {"Pais": "Colombia", "Year": 1972, "Eolica": 0, "Hidroelectrica": 7.115021, "Solar": 0, "Otras": 0},
            {"Pais": "Colombia", "Year": 1973, "Eolica": 0, "Hidroelectrica": 7.7433486, "Solar": 0, "Otras": 0},
            {"Pais": "Colombia", "Year": 1974, "Eolica": 0, "Hidroelectrica": 8.7920685, "Solar": 0, "Otras": 0},
            {"Pais": "Colombia", "Year": 1975, "Eolica": 0, "Hidroelectrica": 9.7323, "Solar": 0, "Otras": 0.189},
            {"Pais": "Colombia", "Year": 1976, "Eolica": 0, "Hidroelectrica": 10.22642, "Solar": 0, "Otras": 0.202},
            {"Pais": "Colombia", "Year": 1977, "Eolica": 0, "Hidroelectrica": 10.451812, "Solar": 0, "Otras": 0.192},
            {"Pais": "Colombia", "Year": 1978, "Eolica": 0, "Hidroelectrica": 12.07144, "Solar": 0, "Otras": 0.206},
            {"Pais": "Colombia", "Year": 1979, "Eolica": 0, "Hidroelectrica": 13.2593, "Solar": 0, "Otras": 0.216},
            {"Pais": "Colombia", "Year": 1980, "Eolica": 0, "Hidroelectrica": 14.44702, "Solar": 0, "Otras": 0.227},
            {"Pais": "Colombia", "Year": 1981, "Eolica": 0, "Hidroelectrica": 14.26534, "Solar": 0, "Otras": 0.212},
            {"Pais": "Colombia", "Year": 1982, "Eolica": 0, "Hidroelectrica": 15.238536, "Solar": 0, "Otras": 0.231},
            {"Pais": "Colombia", "Year": 1983, "Eolica": 0, "Hidroelectrica": 15.365776, "Solar": 0, "Otras": 0.234},
            {"Pais": "Colombia", "Year": 1984, "Eolica": 0, "Hidroelectrica": 17.14022, "Solar": 0, "Otras": 0.255},
            {"Pais": "Colombia", "Year": 1985, "Eolica": 0, "Hidroelectrica": 18.440771, "Solar": 0, "Otras": 0.267},
            {"Pais": "Colombia", "Year": 1986, "Eolica": 0, "Hidroelectrica": 21.332952, "Solar": 0, "Otras": 0.266},
            {"Pais": "Colombia", "Year": 1987, "Eolica": 0, "Hidroelectrica": 23.24756, "Solar": 0, "Otras": 0.268},
            {"Pais": "Colombia", "Year": 1988, "Eolica": 0, "Hidroelectrica": 24.5194, "Solar": 0, "Otras": 0.274},
            {"Pais": "Colombia", "Year": 1989, "Eolica": 0, "Hidroelectrica": 26.78212, "Solar": 0, "Otras": 0.274},
            {"Pais": "Colombia", "Year": 1990, "Eolica": 0, "Hidroelectrica": 27.495852, "Solar": 0, "Otras": 0.274},
            {"Pais": "Colombia", "Year": 1991, "Eolica": 0, "Hidroelectrica": 27.72608, "Solar": 0, "Otras": 0.269},
            {"Pais": "Colombia", "Year": 1992, "Eolica": 0, "Hidroelectrica": 22.280584, "Solar": 0, "Otras": 0.34},
            {"Pais": "Colombia", "Year": 1993, "Eolica": 0, "Hidroelectrica": 27.856392, "Solar": 0, "Otras": 0.389},
            {"Pais": "Colombia", "Year": 1994, "Eolica": 0, "Hidroelectrica": 32.05839, "Solar": 0, "Otras": 0.444},
            {"Pais": "Colombia", "Year": 1995, "Eolica": 0, "Hidroelectrica": 31.9894, "Solar": 0, "Otras": 0.477},
            {"Pais": "Colombia", "Year": 1996, "Eolica": 0, "Hidroelectrica": 35.287624, "Solar": 0, "Otras": 0.496},
            {"Pais": "Colombia", "Year": 1997, "Eolica": 0, "Hidroelectrica": 31.47576, "Solar": 0, "Otras": 0.483},
            {"Pais": "Colombia", "Year": 1998, "Eolica": 0, "Hidroelectrica": 30.781685, "Solar": 0, "Otras": 0.532},
            {"Pais": "Colombia", "Year": 1999, "Eolica": 0, "Hidroelectrica": 33.700657, "Solar": 0, "Otras": 0.457},
            {"Pais": "Colombia", "Year": 2000, "Eolica": 0, "Hidroelectrica": 31.75, "Solar": 0.01, "Otras": 0.18},
            {"Pais": "Colombia", "Year": 2001, "Eolica": 0, "Hidroelectrica": 31.48, "Solar": 0.01, "Otras": 0.18},
            {"Pais": "Colombia", "Year": 2002, "Eolica": 0, "Hidroelectrica": 33.63, "Solar": 0.01, "Otras": 0.17},
            {"Pais": "Colombia", "Year": 2003, "Eolica": 0, "Hidroelectrica": 35.81, "Solar": 0.01, "Otras": 0.16},
            {"Pais": "Colombia", "Year": 2004, "Eolica": 0.05, "Hidroelectrica": 39.68, "Solar": 0.01, "Otras": 0.15},
            {"Pais": "Colombia", "Year": 2005, "Eolica": 0.05, "Hidroelectrica": 39.4, "Solar": 0.01, "Otras": 0.16},
            {"Pais": "Colombia", "Year": 2006, "Eolica": 0.06, "Hidroelectrica": 42.31, "Solar": 0.01, "Otras": 0.2},
            {"Pais": "Colombia", "Year": 2007, "Eolica": 0.05, "Hidroelectrica": 44, "Solar": 0.01, "Otras": 0.19},
            {"Pais": "Colombia", "Year": 2008, "Eolica": 0.05, "Hidroelectrica": 45.94, "Solar": 0.01, "Otras": 0.17},
            {"Pais": "Colombia", "Year": 2009, "Eolica": 0.06, "Hidroelectrica": 40.64, "Solar": 0.01, "Otras": 0.33},
            {"Pais": "Colombia", "Year": 2010, "Eolica": 0.04, "Hidroelectrica": 40, "Solar": 0.01, "Otras": 0.55},
            {"Pais": "Colombia", "Year": 2011, "Eolica": 0.04, "Hidroelectrica": 48.39, "Solar": 0.01, "Otras": 0.37},
            {"Pais": "Colombia", "Year": 2012, "Eolica": 0.05, "Hidroelectrica": 47.11, "Solar": 0.01, "Otras": 0.4},
            {"Pais": "Colombia", "Year": 2013, "Eolica": 0.06, "Hidroelectrica": 49.76, "Solar": 0.01, "Otras": 0.65},
            {"Pais": "Colombia", "Year": 2014, "Eolica": 0.07, "Hidroelectrica": 47.25, "Solar": 0.01, "Otras": 0.73},
            {"Pais": "Colombia", "Year": 2015, "Eolica": 0.07, "Hidroelectrica": 47.94, "Solar": 0.01, "Otras": 0.97},
            {"Pais": "Colombia", "Year": 2016, "Eolica": 0.05, "Hidroelectrica": 48.46, "Solar": 0.01, "Otras": 1.01},
            {"Pais": "Colombia", "Year": 2017, "Eolica": 0, "Hidroelectrica": 60.64, "Solar": 0.01, "Otras": 0.73},
            {"Pais": "Colombia", "Year": 2018, "Eolica": 0.04, "Hidroelectrica": 59.16, "Solar": 0.02, "Otras": 0.84},
            {"Pais": "Colombia", "Year": 2019, "Eolica": 0.06, "Hidroelectrica": 52.98, "Solar": 0.13, "Otras": 1.11},
            {"Pais": "Colombia", "Year": 2020, "Eolica": 0.01, "Hidroelectrica": 48.44, "Solar": 0.19, "Otras": 1.3},
            {"Pais": "Colombia", "Year": 2021, "Eolica": 0.06, "Hidroelectrica": 58.19, "Solar": 0.32, "Otras": 1.02}
        ],           
                
        columns: [
            { data: 'Pais' },
            { data: 'Year' },
            { data: 'Eolica' },
            { data: 'Hidroelectrica' },
            { data: 'Solar' },
            { data: 'Otras' }
        ],
        responsive: true
    });
})
});

        

