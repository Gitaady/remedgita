var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_1.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_RUMAHSAKIT_PT_25K_2 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_PT_25K_2 = format_RUMAHSAKIT_PT_25K_2.readFeatures(json_RUMAHSAKIT_PT_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_PT_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_PT_25K_2.addFeatures(features_RUMAHSAKIT_PT_25K_2);
var lyr_RUMAHSAKIT_PT_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHSAKIT_PT_25K_2, 
                style: style_RUMAHSAKIT_PT_25K_2,
                popuplayertitle: "RUMAHSAKIT_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_PT_25K_2.png" /> RUMAHSAKIT_PT_25K'
            });
var format_Rumahsakit_KabKudusrumahsakit_pt_25k_3 = new ol.format.GeoJSON();
var features_Rumahsakit_KabKudusrumahsakit_pt_25k_3 = format_Rumahsakit_KabKudusrumahsakit_pt_25k_3.readFeatures(json_Rumahsakit_KabKudusrumahsakit_pt_25k_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumahsakit_KabKudusrumahsakit_pt_25k_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumahsakit_KabKudusrumahsakit_pt_25k_3.addFeatures(features_Rumahsakit_KabKudusrumahsakit_pt_25k_3);
var lyr_Rumahsakit_KabKudusrumahsakit_pt_25k_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumahsakit_KabKudusrumahsakit_pt_25k_3, 
                style: style_Rumahsakit_KabKudusrumahsakit_pt_25k_3,
                popuplayertitle: "Rumahsakit_KabKudus — rumahsakit_pt_25k",
                interactive: true,
                title: '<img src="styles/legend/Rumahsakit_KabKudusrumahsakit_pt_25k_3.png" /> Rumahsakit_KabKudus — rumahsakit_pt_25k'
            });
var format_KANTORPOS_PT_25K_4 = new ol.format.GeoJSON();
var features_KANTORPOS_PT_25K_4 = format_KANTORPOS_PT_25K_4.readFeatures(json_KANTORPOS_PT_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KANTORPOS_PT_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KANTORPOS_PT_25K_4.addFeatures(features_KANTORPOS_PT_25K_4);
var lyr_KANTORPOS_PT_25K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KANTORPOS_PT_25K_4, 
                style: style_KANTORPOS_PT_25K_4,
                popuplayertitle: "KANTORPOS_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/KANTORPOS_PT_25K_4.png" /> KANTORPOS_PT_25K'
            });
var format_JALAN_LN_25K_5 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_5 = format_JALAN_LN_25K_5.readFeatures(json_JALAN_LN_25K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_25K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_5.addFeatures(features_JALAN_LN_25K_5);
var lyr_JALAN_LN_25K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_25K_5, 
                style: style_JALAN_LN_25K_5,
                popuplayertitle: "JALAN_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_25K_5.png" /> JALAN_LN_25K'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_RUMAHSAKIT_PT_25K_2.setVisible(true);lyr_Rumahsakit_KabKudusrumahsakit_pt_25k_3.setVisible(true);lyr_KANTORPOS_PT_25K_4.setVisible(true);lyr_JALAN_LN_25K_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_RUMAHSAKIT_PT_25K_2,lyr_Rumahsakit_KabKudusrumahsakit_pt_25k_3,lyr_KANTORPOS_PT_25K_4,lyr_JALAN_LN_25K_5];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RUMAHSAKIT_PT_25K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', 'deskripsi rumahsakit — Sheet1_NO': 'deskripsi rumahsakit — Sheet1_NO', 'deskripsi rumahsakit — Sheet1_KODE': 'deskripsi rumahsakit — Sheet1_KODE', 'deskripsi rumahsakit — Sheet1_NAMA RUMAH SAKIT': 'deskripsi rumahsakit — Sheet1_NAMA RUMAH SAKIT', 'deskripsi rumahsakit — Sheet1_JENIS': 'deskripsi rumahsakit — Sheet1_JENIS', 'deskripsi rumahsakit — Sheet1_TIPE': 'deskripsi rumahsakit — Sheet1_TIPE', 'deskripsi rumahsakit — Sheet1_ALAMAT': 'deskripsi rumahsakit — Sheet1_ALAMAT', });
lyr_Rumahsakit_KabKudusrumahsakit_pt_25k_3.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', 'deskripsi rumahsakit — Sheet1_NO': 'deskripsi rumahsakit — Sheet1_NO', 'deskripsi rumahsakit — Sheet1_KODE': 'deskripsi rumahsakit — Sheet1_KODE', 'deskripsi rumahsakit — Sheet1_NAMA RUMAH SAKIT': 'deskripsi rumahsakit — Sheet1_NAMA RUMAH SAKIT', 'deskripsi rumahsakit — Sheet1_JENIS': 'deskripsi rumahsakit — Sheet1_JENIS', 'deskripsi rumahsakit — Sheet1_TIPE': 'deskripsi rumahsakit — Sheet1_TIPE', 'deskripsi rumahsakit — Sheet1_ALAMAT': 'deskripsi rumahsakit — Sheet1_ALAMAT', });
lyr_KANTORPOS_PT_25K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'JNKPOS': 'JNKPOS', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_JALAN_LN_25K_5.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_RUMAHSAKIT_PT_25K_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'TextEdit', 'JPLYRS': 'TextEdit', 'ALAMAT': 'TextEdit', 'deskripsi rumahsakit — Sheet1_NO': 'Range', 'deskripsi rumahsakit — Sheet1_KODE': 'Range', 'deskripsi rumahsakit — Sheet1_NAMA RUMAH SAKIT': 'TextEdit', 'deskripsi rumahsakit — Sheet1_JENIS': 'TextEdit', 'deskripsi rumahsakit — Sheet1_TIPE': 'TextEdit', 'deskripsi rumahsakit — Sheet1_ALAMAT': 'TextEdit', });
lyr_Rumahsakit_KabKudusrumahsakit_pt_25k_3.set('fieldImages', {'fid': '', 'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'TIPRST': '', 'JPLYRS': '', 'ALAMAT': '', 'deskripsi rumahsakit — Sheet1_NO': '', 'deskripsi rumahsakit — Sheet1_KODE': '', 'deskripsi rumahsakit — Sheet1_NAMA RUMAH SAKIT': '', 'deskripsi rumahsakit — Sheet1_JENIS': '', 'deskripsi rumahsakit — Sheet1_TIPE': '', 'deskripsi rumahsakit — Sheet1_ALAMAT': '', });
lyr_KANTORPOS_PT_25K_4.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'JNKPOS': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_JALAN_LN_25K_5.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_RUMAHSAKIT_PT_25K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', 'deskripsi rumahsakit — Sheet1_NO': 'no label', 'deskripsi rumahsakit — Sheet1_KODE': 'no label', 'deskripsi rumahsakit — Sheet1_NAMA RUMAH SAKIT': 'no label', 'deskripsi rumahsakit — Sheet1_JENIS': 'no label', 'deskripsi rumahsakit — Sheet1_TIPE': 'no label', 'deskripsi rumahsakit — Sheet1_ALAMAT': 'no label', });
lyr_Rumahsakit_KabKudusrumahsakit_pt_25k_3.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', 'deskripsi rumahsakit — Sheet1_NO': 'no label', 'deskripsi rumahsakit — Sheet1_KODE': 'no label', 'deskripsi rumahsakit — Sheet1_NAMA RUMAH SAKIT': 'no label', 'deskripsi rumahsakit — Sheet1_JENIS': 'no label', 'deskripsi rumahsakit — Sheet1_TIPE': 'no label', 'deskripsi rumahsakit — Sheet1_ALAMAT': 'no label', });
lyr_KANTORPOS_PT_25K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'JNKPOS': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_JALAN_LN_25K_5.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_LN_25K_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});