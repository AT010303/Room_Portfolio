uniform sampler2D nbakedm;
uniform sampler2D dbakedm;
uniform sampler2D lightMapm;

uniform float NightMix;

uniform vec3 lightBoardColor;
uniform float lightBoardStrength;

uniform vec3 lightPcColor;
uniform float lightPcStrength;

uniform vec3 lightDeskColor;
uniform float lightDeskStrength;

varying vec2 vUv;

#include "../partials/blend.glsl"

void main(){

    vec3 bakedNightColor = texture2D(nbakedm, vUv).rgb;
    vec3 bakedDayColor = texture2D(dbakedm, vUv).rgb;
    vec3 bakedColor = mix(bakedDayColor, bakedNightColor, NightMix);
    vec3 lightMapColor = texture2D(lightMapm, vUv).rgb;


    float boardLightS = lightMapColor.r * lightBoardStrength;
    bakedColor = blendLighten(bakedColor, lightBoardColor, boardLightS);

    float deskLightS = lightMapColor.g * lightDeskStrength;
    bakedColor = blendLighten(bakedColor, lightDeskColor, deskLightS);

    float pcLightS = lightMapColor.b * lightPcStrength;
    bakedColor = blendLighten(bakedColor, lightPcColor, pcLightS);


    gl_FragColor = vec4(bakedColor, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}