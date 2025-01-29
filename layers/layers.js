ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([19.837844, -24.213968, 37.815111, -14.516616]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_NationalProvincialboundaries_1 = new ol.format.GeoJSON();
var features_NationalProvincialboundaries_1 = format_NationalProvincialboundaries_1.readFeatures(json_NationalProvincialboundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_NationalProvincialboundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NationalProvincialboundaries_1.addFeatures(features_NationalProvincialboundaries_1);
var lyr_NationalProvincialboundaries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NationalProvincialboundaries_1, 
                style: style_NationalProvincialboundaries_1,
                popuplayertitle: 'National Provincial boundaries',
                interactive: true,
                title: '<img src="styles/legend/NationalProvincialboundaries_1.png" /> National Provincial boundaries'
            });
var format_GCFDisrictboundaries_2 = new ol.format.GeoJSON();
var features_GCFDisrictboundaries_2 = format_GCFDisrictboundaries_2.readFeatures(json_GCFDisrictboundaries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GCFDisrictboundaries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GCFDisrictboundaries_2.addFeatures(features_GCFDisrictboundaries_2);
var lyr_GCFDisrictboundaries_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GCFDisrictboundaries_2, 
                style: style_GCFDisrictboundaries_2,
                popuplayertitle: 'GCF Disrict boundaries',
                interactive: true,
                title: '<img src="styles/legend/GCFDisrictboundaries_2.png" /> GCF Disrict boundaries'
            });
var format_GCFIrrigationSchemes_3 = new ol.format.GeoJSON();
var features_GCFIrrigationSchemes_3 = format_GCFIrrigationSchemes_3.readFeatures(json_GCFIrrigationSchemes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GCFIrrigationSchemes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GCFIrrigationSchemes_3.addFeatures(features_GCFIrrigationSchemes_3);
var lyr_GCFIrrigationSchemes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GCFIrrigationSchemes_3, 
                style: style_GCFIrrigationSchemes_3,
                popuplayertitle: 'GCF Irrigation Schemes',
                interactive: true,
    title: 'GCF Irrigation Schemes<br />\
    <img src="styles/legend/GCFIrrigationSchemes_3_0.png" /> Complete<br />\
    <img src="styles/legend/GCFIrrigationSchemes_3_1.png" /> Construction in progress<br />\
    <img src="styles/legend/GCFIrrigationSchemes_3_2.png" /> Not started<br />\
    <img src="styles/legend/GCFIrrigationSchemes_3_3.png" /> Procurement in progress<br />\
    <img src="styles/legend/GCFIrrigationSchemes_3_4.png" /> Existing<br />\
    <img src="styles/legend/GCFIrrigationSchemes_3_5.png" /> On-hold<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_NationalProvincialboundaries_1.setVisible(true);lyr_GCFDisrictboundaries_2.setVisible(true);lyr_GCFIrrigationSchemes_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_NationalProvincialboundaries_1,lyr_GCFDisrictboundaries_2,lyr_GCFIrrigationSchemes_3];
lyr_NationalProvincialboundaries_1.set('fieldAliases', {'ID': 'ID', 'PROVINCE_N': 'PROVINCE_N', 'AREA': 'AREA', 'POPULATION': 'POPULATION', 'POPU_M': 'POPU_M', 'POPU_F': 'POPU_F', 'PERIMETER': 'PERIMETER', });
lyr_GCFDisrictboundaries_2.set('fieldAliases', {'fid': 'fid', 'NAME1_': 'NAME1_', 'NAME2_': 'NAME2_', });
lyr_GCFIrrigationSchemes_3.set('fieldAliases', {'fid': 'fid', 'Scheme': 'Irrigation Scheme', 'Province': 'Province', 'District': 'District', 'Ward': 'Ward', 'Water_Sour': 'Water Source', 'Status': 'Status', 'Total_ha_': 'Total Area (Ha)', 'html_exp': 'html_exp', });
lyr_NationalProvincialboundaries_1.set('fieldImages', {'ID': 'Hidden', 'PROVINCE_N': 'Hidden', 'AREA': 'Hidden', 'POPULATION': 'Hidden', 'POPU_M': 'Hidden', 'POPU_F': 'Hidden', 'PERIMETER': 'Hidden', });
lyr_GCFDisrictboundaries_2.set('fieldImages', {'fid': 'Hidden', 'NAME1_': 'Hidden', 'NAME2_': 'Hidden', });
lyr_GCFIrrigationSchemes_3.set('fieldImages', {'fid': 'Hidden', 'Scheme': 'TextEdit', 'Province': 'TextEdit', 'District': 'TextEdit', 'Ward': 'TextEdit', 'Water_Sour': 'TextEdit', 'Status': 'TextEdit', 'Total_ha_': 'TextEdit', 'html_exp': 'ExternalResource', });
lyr_NationalProvincialboundaries_1.set('fieldLabels', {});
lyr_GCFDisrictboundaries_2.set('fieldLabels', {});
lyr_GCFIrrigationSchemes_3.set('fieldLabels', {'Scheme': 'inline label - always visible', 'Province': 'inline label - always visible', 'District': 'inline label - always visible', 'Ward': 'inline label - always visible', 'Water_Sour': 'inline label - always visible', 'Status': 'inline label - always visible', 'Total_ha_': 'inline label - always visible', 'html_exp': 'inline label - always visible', });
lyr_GCFIrrigationSchemes_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});