function sub(A, B)
{
    var n = A.length;
    var C = Array(n).fill(0).map(()=>new Array(n).fill(0));
    for (let i=0; i < n; i++)
    {
        for (let j=0; j < n; j++)
        {
            C[i][j] = A[i][j] - B[i][j];
        }
    }
    return C;
}

function add(A, B)
{
    var n = A.length;
    var C = Array(n).fill(0).map(()=>new Array(n).fill(0));
    for (let i=0; i < n; i++)
    {
        for (let j=0; j < n; j++)
        {
            C[i][j] = A[i][j] + B[i][j];
        }
    }
    return C;
}

function split(P, C, iB, jB)
    {
        for (let i1 =0, i2 = iB; i1 < C.length; i1++, i2++)
        {
            for (let j1=0, j2 = jB; j1 < C.length; j1++, j2++)
            {
                C[i1][j1] = P[i2][j2];
            }
        }
    }

 function join(C, P, iB, jB)
    {
        for (let i1=0, i2 = iB; i1 < C.length; i1++, i2++)
        {
            for (let j1=0, j2 = jB; j1 < C.length; j1++, j2++)
            {
                P[i2][j2] = C[i1][j1];
            }
        }
    }

 function multiply(A, B)
    {
        var n = A.length;
        var R = Array(n).fill(0).map(()=>new Array(n).fill(0));
        if (n == 1)
        {
            R[0][0] = A[0][0] * B[0][0];
        }
        else 
        {
            var A11 = Array(parseInt(n / 2)).fill(0).map(()=>new Array(parseInt(n / 2)).fill(0));
            var A12 = Array(parseInt(n / 2)).fill(0).map(()=>new Array(parseInt(n / 2)).fill(0));
            var A21 = Array(parseInt(n / 2)).fill(0).map(()=>new Array(parseInt(n / 2)).fill(0));
            var A22 = Array(parseInt(n / 2)).fill(0).map(()=>new Array(parseInt(n / 2)).fill(0));
            var B11 = Array(parseInt(n / 2)).fill(0).map(()=>new Array(parseInt(n / 2)).fill(0));
            var B12 = Array(parseInt(n / 2)).fill(0).map(()=>new Array(parseInt(n / 2)).fill(0));
            var B21 = Array(parseInt(n / 2)).fill(0).map(()=>new Array(parseInt(n / 2)).fill(0));
            var B22 = Array(parseInt(n / 2)).fill(0).map(()=>new Array(parseInt(n / 2)).fill(0));
            this.split(A, A11, 0, 0);
            this.split(A, A12, 0, parseInt(n / 2));
            this.split(A, A21, parseInt(n / 2), 0);
            this.split(A, A22, parseInt(n / 2), parseInt(n / 2));
            this.split(B, B11, 0, 0);
            this.split(B, B12, 0, parseInt(n / 2));
            this.split(B, B21, parseInt(n / 2), 0);
            this.split(B, B22, parseInt(n / 2), parseInt(n / 2));
            var M1 = this.multiply(this.add(A11, A22), this.add(B11, B22));
            var M2 = this.multiply(this.add(A21, A22), B11);
            var M3 = this.multiply(A11, this.sub(B12, B22));
            var M4 = this.multiply(A22, this.sub(B21, B11));
            var M5 = this.multiply(this.add(A11, A12), B22);
            var M6 = this.multiply(this.sub(A21, A11), this.add(B11, B12));
            var M7 = this.multiply(this.sub(A12, A22), this.add(B21, B22));
            var C11 = this.add(this.sub(this.add(M1, M4), M5), M7);
            var C12 = this.add(M3, M5);
            var C21 = this.add(M2, M4);
            var C22 = this.add(this.sub(this.add(M1, M3), M2), M6);
            this.join(C11, R, 0, 0);
            this.join(C12, R, 0, parseInt(n / 2));
            this.join(C21, R, parseInt(n / 2), 0);
            this.join(C22, R, parseInt(n / 2), parseInt(n / 2));
        }
        return R;
    }

    A = [[1, 2, 3, 4], [4, 3, 0, 1], [5, 6, 1, 1], [0, 2, 5, 6]];
    B = [[1, 0, 5, 1], [1, 2, 0, 2], [0, 3, 2, 3], [1, 2, 1, 2]];
    var N = 4

    var C = multiply(A,B)

    for (let i = 0; i < N; i++) {
			
        for (let j = 0; j < N; j++){
            
            document.write(C[i][j] + "  ");
        }
        document.write("<br/>")

    }