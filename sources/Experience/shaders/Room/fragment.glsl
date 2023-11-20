uniform sampler2D nbakedm;
uniform sampler2D lightMapm;

uniform vec3 lightBoardColor;
uniform float lightBoardStrength;

uniform vec3 lightPcColor;
uniform float lightPcStrength;

uniform vec3 lightDeskColor;
uniform float lightDeskStrength;

varying vec2 vUv;

void main(){

    vec3 bakedColor = texture2D(nbakedm, vUv).rgb;
    vec3 lightMapColor = texture2D(lightMapm, vUv).rgb;


    float boardLightS = lightMapColor.r * lightBoardStrength;
    bakedColor = mix(bakedColor, lightBoardColor, boardLightS);

    float deskLightS = lightMapColor.g * lightDeskStrength;
    bakedColor = mix(bakedColor, lightDeskColor, deskLightS);

    float pcLightS = lightMapColor.b * lightPcStrength;
    bakedColor = mix(bakedColor, lightPcColor, pcLightS);

    // bakedColor = mix(bakedColor, lightBoardColor, lightMapColor * lightBoardStrength);


    gl_FragColor = vec4(bakedColor, 1.0);
}