var Popup = {
	Show: function(geography, data, element, e) {
		e.stopPropagation();
		
		var el =
			'<div class="popup-card"> \
				<span class="country">' + geography.properties.name + '</span>\
        </div>';
        		
		var $el = $(el).css({
			top: e.clientY - 10,
			left: e.clientX
		});

		Popup.Hide();
			$('body').append($el);
		},

    Hide: function() {
        $('body .popup-card').remove();
    }
};

var dataMap = new Datamap({
    element         : document.getElementById('map'),
    scope           : 'world',
    projection      : 'mercator',
    geographyConfig : {
        highlightBorderColor : '#fff',
        highlightBorderWidth : 1,
        highlightFillColor   : '#f75455',
        popupOnHover         : false
    },

  fills: {
          defaultFill: '#eff0f2',
          gt: '#ed1f24'
        },
  data: {
          ASM: {fillKey: 'gt' },
          BDI: {fillKey: 'gt' },
          BEN: {fillKey: 'gt' },
          BHR: {fillKey: 'gt'},
          BOL: {fillKey: 'gt'},
          BRA: {fillKey: 'gt' },
          BFA: {fillKey: 'gt' },
          CAN: {fillKey: 'gt' },
          CHN: {fillKey: 'gt' },
          CIV: {fillKey: 'gt' },
          CMR: {fillKey: 'gt' },
          COD: {fillKey: 'gt' },
          CUB: {fillKey: 'gt' },
          DOM: {fillKey: 'gt' },
          EGY: {fillKey: 'gt' },
          ETH: {fillKey: 'gt' },
          FRA: {fillKey: 'gt' },
          DEU: {fillKey: 'gt' },
          GAB: {fillKey: 'gt' },
          GBR: {fillKey: 'gt' },
          GHA: {fillKey: 'gt' },
          GTM: {fillKey: 'gt' },
          HTI: {fillKey: 'gt' },
          HND: {fillKey: 'gt' },
          IND: {fillKey: 'gt' },
          ITA: {fillKey: 'gt' },
          JPN: {fillKey: 'gt' },
          KEN: {fillKey: 'gt' },
          KOR: {fillKey: 'gt' },
          KWT: {fillKey: 'gt' },
          LBR: {fillKey: 'gt' },
          MEX: {fillKey: 'gt' },
          MMR: {fillKey: 'gt' },
          MWI: {fillKey: 'gt' },
          NER: {fillKey: 'gt' },
          NGA: {fillKey: 'gt' },
          PAN: {fillKey: 'gt' },
          PHL: {fillKey: 'gt' },
          PRI: {fillKey: 'gt' },
          PRK: {fillKey: 'gt' },
          SDN: {fillKey: 'gt' },
          SGP: {fillKey: 'gt' },
          SLV: {fillKey: 'gt' },
          TCD: {fillKey: 'gt' },
          TGO: {fillKey: 'gt' },
          TZA: {fillKey: 'gt' },
          UGA: {fillKey: 'gt' },
          USA: {fillKey: 'gt'},
          VNM: {fillKey: 'gt' },
          ZAF: {fillKey: 'gt' },
          ZMB: {fillKey: 'gt' },
          ZWE: {fillKey: 'gt' }
         },
   
    done: function(datamap) {
        datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
            Popup.Show(geography, datamap.options.data[geography.id], this, d3.event);
        });
    }
});

$('body').on('click', function(e){
    Popup.Hide();
})
.on('click', '.datamaps-subunit,.popup-card', function(e){
    e.stopPropagation();
});