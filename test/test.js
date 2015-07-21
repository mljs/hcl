var hclust = require('..');

var data = [[2,6], [3,4], [3,8], [4,5], [4,7], [6,2], [7,2], [7,4], [8,4], [8,5]];

describe('Hierarchical clustering test', function () {

    it('AGNES test', function () {
        var agnes = hclust.agnes(data);
        agnes.distance.should.equal(3.6056);
    });

    it('DIANA test', function () {
        var HC = new hclust.diana(data);
        var dend = HC.getDendogram();
        dend.dis.should.equal(0);
        HC.nClusters(3)[0][0][0].should.equal(3);
    });
});