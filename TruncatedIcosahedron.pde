class node{
  PVector x;
  PVector v;
  PVector f;
  node(PVector xo){
    x = xo;
    v = new PVector();
    f = new PVector();
  }
  void update(){
    boolean dampen = false;
    if(x.x<0){
      f.x -= x.x*spring;
      dampen = true;
    };
    if(x.x>width){
      f.x -= (x.x-width)*spring;
      dampen = true;
    };
    if(x.y<0){
      f.y -= x.y*spring;
      dampen = true;
    };
    if(x.y>height){
      f.y -= (x.y-height)*spring;
      dampen = true;
    };
    if(x.z<-depth){
      f.z -= (x.z+depth)*spring;
      dampen = true;
    };
    if(x.z>0){
      f.z -= x.z*spring;
      dampen = true;
    };
    if(dampen){v.mult(0.9);}
    v.add(f);
    f = new PVector(0,gravity,0);
    x.add(v);
  }
}
class element{
  PVector x;
  PVector v;
  PVector f;
  Orient ori;
  PVector W;
  PVector T;
  PVector[] dxo;
  node[] corners;
  void inits(){
    x = new PVector();
    v = new PVector();
    f = new PVector();
    ori = new Orient();
    W = new PVector();
    T = new PVector();
  }
  element(node A,node B,node C,node D,node E){
    inits();
    corners = new node[5];
    corners[0] = A;
    corners[1] = B;
    corners[2] = C;
    corners[3] = D;
    corners[4] = E;
    dxo = new PVector[corners.length];
    float rad = 0.85065085*L;
    for(int i=0;i<corners.length;i++){
      float phi = float(i)/corners.length*TWO_PI;
      dxo[i] = new PVector(rad*cos(phi),rad*sin(phi));
    }
  }
  element(node A,node B,node C,node D,node E,node F){
    inits();
    corners = new node[6];
    corners[0] = A;
    corners[1] = B;
    corners[2] = C;
    corners[3] = D;
    corners[4] = E;
    corners[5] = F;
    dxo = new PVector[corners.length];
    float rad = L;
    for(int i=0;i<corners.length;i++){
      float phi = float(i)/corners.length*TWO_PI;
      dxo[i] = new PVector(rad*cos(phi),rad*sin(phi));
    }
  }
  void update(){
    for(int i=0;i<corners.length;i++){
      PVector arm = ori.toWorld(dxo[i]);
      PVector restore = PVector.sub(arm,
        PVector.sub(corners[i].x,x));
      restore.mult(spring);
      PVector dv = PVector.sub(corners[i].v,
        PVector.add(W.cross(arm),v));
      restore.sub(PVector.mult(dv,damping));
      corners[i].f.add(restore);
      f.sub(restore);
      T.sub(arm.cross(restore));
    }
    v.add(f);
    f = new PVector(0,gravity,0);
    x.add(v);
    T.mult(0.001);
    W.add(T);
    if(W.mag()>PI/4){
      W.normalize();
      W.mult(PI/4);
    }
    T = new PVector();
    ori.spin(W);
  }
}
float spring = 0.1;
float damping = 0.05;
float depth;
node[] nodes;
element[] elements;
float L = 32;
float gravity = 0.01;
void setup(){
  size(500,400,P3D);
  depth = width;
  ortho(-width/2, width/2, -height/2, height/2, -10, 10);
  nodes = new node[60];
  for(int i=0;i<nodes.length;i++){
    nodes[i] = new node(new PVector(random(0,width),
      random(0,height),random(0,depth)));
  }
  elements = new element[32];
  elements[0] = new element(nodes[0],nodes[1],nodes[2],nodes[3],nodes[4]);
  elements[1] = new element(nodes[0],nodes[5],nodes[12],nodes[13],nodes[6],nodes[1]);
  elements[2] = new element(nodes[1],nodes[6],nodes[14],nodes[15],nodes[7],nodes[2]);
  elements[3] = new element(nodes[2],nodes[7],nodes[16],nodes[17],nodes[8],nodes[3]);
  elements[4] = new element(nodes[3],nodes[8],nodes[18],nodes[19],nodes[9],nodes[4]);
  elements[5] = new element(nodes[0],nodes[4],nodes[9],nodes[10],nodes[11],nodes[5]);
  elements[6] = new element(nodes[5],nodes[11],nodes[24],nodes[25],nodes[12]);
  elements[7] = new element(nodes[12],nodes[25],nodes[26],nodes[27],nodes[28],nodes[13]);
  elements[8] = new element(nodes[6],nodes[13],nodes[28],nodes[29],nodes[14]);
  elements[9] = new element(nodes[14],nodes[29],nodes[30],nodes[31],nodes[32],nodes[15]);
  elements[10] = new element(nodes[7],nodes[15],nodes[32],nodes[33],nodes[16]);
  elements[11] = new element(nodes[16],nodes[33],nodes[34],nodes[35],nodes[36],nodes[17]);
  elements[12] = new element(nodes[8],nodes[17],nodes[36],nodes[37],nodes[18]);
  elements[13] = new element(nodes[18],nodes[37],nodes[38],nodes[39],nodes[20],nodes[19]);
  elements[14] = new element(nodes[9],nodes[19],nodes[20],nodes[21],nodes[10]);
  elements[15] = new element(nodes[10],nodes[21],nodes[22],nodes[23],nodes[24],nodes[11]);
  elements[16] = new element(nodes[42],nodes[23],nodes[24],nodes[25],nodes[26],nodes[43]);
  elements[17] = new element(nodes[52],nodes[43],nodes[26],nodes[27],nodes[44]);
  elements[18] = new element(nodes[44],nodes[27],nodes[28],nodes[29],nodes[30],nodes[45]);
  elements[19] = new element(nodes[53],nodes[45],nodes[30],nodes[31],nodes[46]);
  elements[20] = new element(nodes[46],nodes[31],nodes[32],nodes[33],nodes[34],nodes[47]);
  elements[21] = new element(nodes[54],nodes[47],nodes[34],nodes[35],nodes[48]);
  elements[22] = new element(nodes[48],nodes[35],nodes[36],nodes[37],nodes[38],nodes[49]);
  elements[23] = new element(nodes[50],nodes[49],nodes[38],nodes[39],nodes[40]);
  elements[24] = new element(nodes[40],nodes[39],nodes[20],nodes[21],nodes[22],nodes[41]);
  elements[25] = new element(nodes[51],nodes[41],nodes[22],nodes[23],nodes[42]);
  elements[26] = new element(nodes[57],nodes[51],nodes[42],nodes[43],nodes[52],nodes[58]);
  elements[27] = new element(nodes[58],nodes[52],nodes[44],nodes[45],nodes[53],nodes[59]);
  elements[28] = new element(nodes[59],nodes[53],nodes[46],nodes[47],nodes[54],nodes[55]);
  elements[29] = new element(nodes[55],nodes[54],nodes[48],nodes[49],nodes[50],nodes[56]);
  elements[30] = new element(nodes[56],nodes[50],nodes[40],nodes[41],nodes[51],nodes[57]);
  elements[31] = new element(nodes[57],nodes[58],nodes[59],nodes[55],nodes[56]);
  noStroke();
}
void draw(){
  if(frameCount%30==0){println(frameRate);}
  for(int i=0;i<3;i++){physics();}
  background(0);
  lights();
  for(int i=0;i<elements.length;i++){
    if(elements[i].corners.length==5){
      fill(#FF0000);
    }else if(elements[i].corners.length==6){
      fill(#4040FF);
    }
    beginShape(TRIANGLE_FAN);
    vertex(elements[i].x.x,elements[i].x.y,elements[i].x.z);
    for(int j=0;j<elements[i].corners.length;j++){
      PVector vert = elements[i].corners[j].x;
      vertex(vert.x,vert.y,vert.z);
    }
    PVector verte = elements[i].corners[0].x;
    vertex(verte.x,verte.y,verte.z);
    endShape();
  }
}
void physics(){
  for(int i=0;i<elements.length;i++){
    elements[i].update();
  }
//  for(int i=1;i<nodes.length;i++){
//    for(int j=0;j<i;j++){
//      PVector dx = PVector.sub(nodes[j].x,nodes[i].x);
//      if(dx.mag()<L){
//        float buff = (L-dx.mag())*0.2;
//        dx.normalize();
//        dx.mult(buff);
//        nodes[j].f.add(dx);
//        nodes[i].f.sub(dx);
//      }
//    }
//  }
  for(int i=0;i<nodes.length;i++){
    nodes[i].update();
    if(hold == i){
      nodes[i].x = new PVector(mouseX,mouseY,nodes[i].x.z);
      nodes[i].v = new PVector();
    }
  }
}
int hold = -1;
void mousePressed(){
  for(int i=0;i<nodes.length;i++){
    PVector dx = new PVector();
    dx.x = nodes[i].x.x - mouseX;
    dx.y = nodes[i].x.y - mouseY;
    dx.z = 0;
    if(dx.mag()<L/2){
      if(hold!=-1){
        if(nodes[i].x.z>
           nodes[hold].x.z){
          hold = i;
        }
      }else{
        hold = i;
      }
    }
  }
}
void mouseReleased(){
  hold = -1;
}
void keyPressed(){
  if(key==' '){
    for(int i=0;i<nodes.length;i++){
      nodes[i].x = new PVector(random(0,width),
        random(0,height),random(0,depth));
    }
  }
}
